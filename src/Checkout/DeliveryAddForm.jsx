import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Button from "@mui/material/Button";
import './DeliveryAddForm.css'
import AddressCard from "./AddressCard";
import { useNavigate } from "react-router-dom";
import { getAllAddresses, saveOrUpdateAddress } from "../jsFiles/addressService";

const InputContainer = styled.div`
  width: 100% !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FilledAddress = styled.div`
    width: 50%;
    overflow-y: scroll;
    height: 300px;
`

const DeliveryAddForm = (props) => {
  const [address, setAddress] = useState({
    id: 0,
    firstname: "",
    lastname: "",
    city: "",
    country: "",
    landmark: "",
    area: "",
    pinCode: "",
    phoneNumber: "",
    userId:null
  });
    const navigate = useNavigate();
//   console.log("props val", props);
  useEffect(() => {
    if (!props.product) {
      setAddress({});
    } else {
      setAddress(props.product);
    }
  }, []);

  const cancelChanges = (e) => {
    e.preventDefault();
    if (address.id > 0) {
      alert("you are allow to do cancel all changes");
    } else {
      setAddress({
        id: 0,
        firstname: "",
        lastname: "",
        city: "",
        country: "",
        landmark: "",
        area: "",
        pinCode: "",
        phoneNumber: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAddress({
      ...address, // Keep the existing form data
      [name]: value, // Update the specific field by its name
    });
  };

  const userId = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.id;

  const [addressList, setAddressList] = useState([]);
//   console.log(userId);
  const handleSubmit = (e) => {
    e.preventDefault();

    setAddress({...address,userId:userId});
    saveOrUpdateAddress(address)
      .then((response) => {
        console.log('Product saved:', response);
        toast.success("Address added successfully!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });

        setAddress({
            firstname: "",
            lastname: "",
            city: "",
            country: "",
            landmark: "",
            area: "",
            pinCode: "",
            phoneNumber: "",
          });
              navigate("?step=3");
      })
      .catch((error) => {
        console.log(error)
        toast.error("Something went wrong.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  useEffect(() => {
    getAllAddresses(userId)
      .then((response) => {
        setAddressList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="container">
      <div className="formContainer">
        <FilledAddress>
        {
        addressList.map((item, index) => (
            <AddressCard data={item} key={index}/>
            ))
        }
        </FilledAddress>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          className="formdata"
        >
          <InputContainer>
            <TextField
              id="firstname"
              label="firstname"
              variant="standard"
              className="inputBox"
              value={address.firstname}
              name="firstname"
              onChange={handleInputChange}
            />

            <TextField
              id="lastname"
              label="lastname"
              variant="standard"
              className="inputBox"
              value={address.lastname}
              name="lastname"
              onChange={handleInputChange}
            />
          </InputContainer>

          <InputContainer>
          <TextField
              id="area"
              label="area"
              multiline
              variant="standard"
              className="inputBox"
              value={address.area}
              name="area"
              onChange={handleInputChange}
            />
            <TextField
              id="landmark"
              label="landmark"
              multiline
              maxRows={4}
              variant="standard"
              className="inputBox"
              value={address.landmark}
              name="landmark"
              onChange={handleInputChange}
            />
          
          </InputContainer>

          <InputContainer>
            <TextField
              id="city"
              label="city"
              variant="standard"
              className="inputBox"
              value={address.city}
              name="city"
              onChange={handleInputChange}
            />
            <TextField
              id="country"
              label="country"
              variant="standard"
              className="inputBox"
              value={address.country}
              name="country"
              onChange={handleInputChange}
            />
          </InputContainer>

          <InputContainer>
            <TextField
              id="phoneNumber"
              label="phoneNumber"
              type="number"
              className="inputBox"
              variant="standard"
              autoComplete="off"
              InputLabelProps={{
                shrink: true,
              }}
              name="phoneNumber"
              value={address.phoneNumber}
              onChange={handleInputChange}
            />
            <TextField
              id="pinCode"
              label="pinCode"
              type="number"
              autoComplete="off"
              className="inputBox"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              name="pinCode"
              value={address.pinCode}
              onChange={handleInputChange}
            />
          </InputContainer>

          <InputContainer>
            <div className="buttons">
              <Button type="submit" onClick={handleSubmit} variant="contained">
                Delivered Here
              </Button>
              <Button onClick={cancelChanges} variant="contained" color="grey">
                Reset Address
              </Button>
            </div>
          </InputContainer>
        </Box>
      </div>
    </div>
  );
};

export default DeliveryAddForm;
