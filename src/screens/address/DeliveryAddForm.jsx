import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./DeliveryAddForm.css";
import { styled,Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/redux/store";
import { useNavigate } from "react-router-dom";
import { getAllAddresses, saveOrUpdateAddress } from "../../services/redux/address/action";
import AddressCard from "./AddressCard";

const FilledAddress = styled(Box)(({ theme }) => ({
  width: "50%",
  overflowY: "scroll",
  height: "300px",
  backgroundColor: theme.palette.background.default,
  padding: "20px",
}));
const DeliveryAddForm = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const addressList = useAppSelector(
    (state) => state.address.addressDataState.addresses
  );
  const userId = JSON.parse(localStorage.getItem("user")).id;
  console.log("addressList", addressList);
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
    userId: userId,
  });

  useEffect(() => {
    if (!props.product) {
      setAddress({});
    } else {
      setAddress(props.product);
    }
  }, [props.product]);

  useEffect(() => {
    dispatch(getAllAddresses(userId));
  }, [dispatch, userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const cancelChanges = (e) => {
    e.preventDefault();
    if (address.id > 0) {
      alert("You are allowed to cancel all changes");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveOrUpdateAddress({ ...address, userId }))
      .then(() => {
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
        toast.error("Something went wrong.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
  return (
    <div className="container">
      <div className="formContainer">
        <FilledAddress>
          {addressList.map((item, index) => (
            <AddressCard data={item} key={index} />
          ))}
        </FilledAddress>
        <Box
          component="form"
          width={"100%"}
          noValidate
          autoComplete="off"
          className="formdata"
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="firstname"
                label="firstname"
                variant="standard"
                className="inputBox"
                value={address.firstname}
                name="firstname"
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="lastname"
                label="lastname"
                variant="standard"
                className="inputBox"
                value={address.lastname}
                name="lastname"
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="area"
                label="area"
                multiline
                variant="standard"
                className="inputBox"
                value={address.area}
                name="area"
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
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
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="city"
                label="city"
                variant="standard"
                className="inputBox"
                value={address.city}
                name="city"
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="country"
                label="country"
                variant="standard"
                className="inputBox"
                value={address.country}
                name="country"
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
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
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
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
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid xs={12} mt={2}>
            <div className="buttons">
              <Button type="submit" onClick={handleSubmit} variant="contained">
                Delivered Here
              </Button>
              <Button onClick={cancelChanges} variant="contained" color="grey">
                Reset Address
              </Button>
            </div>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default DeliveryAddForm;
