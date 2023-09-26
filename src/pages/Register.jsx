import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient((255, 255, 255, 0.5), (255, 255, 255, 0.5));
  background-image: url("https://images.unsplash.com/photo-1556741533-974f8e62a92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
`;
const Wrapper = styled.div`
  margin-top: 60px;
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  margin: auto;
  ${mobile({ width: "80%" })}
`;
const Title = styled.h1`
  padding: 0 20px;
  ${mobile({ padding: "0 5px", fontSize: "25px" })}
`;
const Form = styled.form`
  margin: auto;
`;
const Input = styled.input`
  min-width: 45%;
  flex: 1;
  margin: 10px 5px 0 0;
  padding: 10px 20px;
  ${mobile({ width: "100%" })}
`;
const Select = styled.select`
  min-width: 45%;
  flex: 1;
  margin: 10px 5px 0 0;
  padding: 10px 20px;
  ${mobile({ width: "100%" })}
`;

const Agrement = styled.div`
  font-size: 12px;
  margin: 10px 0;
`;
const Button = styled.button`
  width: 40%;
  background-color: transparent;
  border: 1px solid teal;
  color: teal;
  padding: 8px 10px;
  &:hover {
    background-color: teal;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;
const Register = () => {
  const country = [
    {
      id: 1,
      name: "India",
    },
    {
      id: 1,
      name: "USA",
    },
    {
      id: 1,
      name: "UK",
    },
    {
      id: 1,
      name: "China",
    },
  ];

  const navigate = useNavigate();
  const [user, setUser] = useState({
        "firstname":'',
        "lastname":'',
        "email":'',
        "region":'',
        "dob":'',
        "password":''
  });

  
  const handleInputChange = (e) => {
    // Extract the name and value of the input field
    const { name, value } = e.target;

    // Update the form data state with the new value
    setUser({
      ...user, // Keep the existing form data
      [name]: value, // Update the specific field by its name
    });
  };

  // Create a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can now access the form data in the formData object
    console.log("Form data submitted:", user);
    axios
      .post("http://localhost:8080/api/v1/auth/register", user)
      .then((response) => {
        console.log("response",response)
        navigate("/login")
      })
      .catch((error) => {
        //return  error;
        console.log(error);
      });
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Create An Account</Title>
          <Form>
            <Input placeholder="Enter your first name" 
              type="text"
              value={user.firstname}
              id="firstname"
              name="firstname"
              onChange={handleInputChange} 
              />
            <Input placeholder="Enter your last name"
              type="text" 
              value={user.lastname}
              id="lastname"
              name="lastname"
              onChange={handleInputChange} 
             />
            <Input placeholder="Enter your email" 
            type="email" 
            value={user.email}
            id="email"
            name="email"
            onChange={handleInputChange} 
            />
            <Input placeholder="Enter your DOB" type="date" 
             value={user.dob}
             id="dob"
             name="dob"
             onChange={handleInputChange} />
            <Select
              className="dropdown"
              // type="text"
              placeholder="Country"
              value={user.region}
              id="size"
              name="size"
              onChange={handleInputChange}
            >
              {country.map((item, index) => (
               
                <option value={item.name} key={index}>
                  {item.name}
                </option>
              ))}
            </Select>
            <Input placeholder="Enter your Password" 
              type="password" 
              value={user.password}
              id="password"
              name="password"
              onChange={handleInputChange} 
            />
            <Input placeholder="Enter your confirm PassWord" 
              type="password" 
            //   value={user.password}
              id="password"
              name="password"
              onChange={handleInputChange} 
            />
            <Agrement>
              i authorise to the website ,that it will take my crediential
            </Agrement>
            <Button onClick={handleSubmit}>register</Button>
            <Link to="/login">
              <Button style={{ marginLeft: "10px" }}>Login</Button>
            </Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
