import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Container, TextField, Typography, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { mobile } from "../../responsive";

const BackgroundContainer = styled(Container)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))",
  backgroundImage: "url('https://images.unsplash.com/photo-1556741533-974f8e62a92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
}));

const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7.5),
  width: "40%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#fff",
  padding: "20px",
  margin: "auto",
  ...mobile({ width: "80%" }),
}));

const Title = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 2.5),
  ...mobile({ padding: "0 5px", fontSize: "25px" }),
}));

const Form = styled("form")({
  margin: "auto",
  width: "100%",
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  minWidth: "45%",
  flex: 1,
  margin: theme.spacing(1.25, 0.625, 0, 0),
  padding: theme.spacing(1.25, 2.5),
  ...mobile({ width: "100%" }),
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  minWidth: "45%",
  flex: 1,
  margin: theme.spacing(1.25, 0.625, 0, 0),
  padding: theme.spacing(1.25, 2.5),
  ...mobile({ width: "100%" }),
}));

const Agreement = styled(Typography)({
  fontSize: "12px",
  margin: "10px 0",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "40%",
  backgroundColor: "transparent",
  border: `1px solid teal`,
  color: "teal",
  padding: theme.spacing(1),
  "&:hover": {
    backgroundColor: "teal",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
}));

const Register = () => {
  const country = [
    { id: 1, name: "India" },
    { id: 2, name: "USA" },
    { id: 3, name: "UK" },
    { id: 4, name: "China" },
  ];

  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    region: '',
    dob: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", user);
    axios
      .post("http://localhost:8080/api/v1/auth/register", user)
      .then((response) => {
        console.log("response", response);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BackgroundContainer>
      <Wrapper>
        <Title variant="h1">Create An Account</Title>
        <Form onSubmit={handleSubmit}>
          <StyledTextField
            placeholder="Enter your first name"
            type="text"
            value={user.firstname}
            id="firstname"
            name="firstname"
            onChange={handleInputChange}
          />
          <StyledTextField
            placeholder="Enter your last name"
            type="text"
            value={user.lastname}
            id="lastname"
            name="lastname"
            onChange={handleInputChange}
          />
          <StyledTextField
            placeholder="Enter your email"
            type="email"
            value={user.email}
            id="email"
            name="email"
            onChange={handleInputChange}
          />
          <StyledTextField
            placeholder="Enter your DOB"
            type="date"
            value={user.dob}
            id="dob"
            name="dob"
            onChange={handleInputChange}
          />
          <StyledSelect
            className="dropdown"
            placeholder="Country"
            value={user.region}
            id="region"
            name="region"
            onChange={handleInputChange}
            displayEmpty
            renderValue={user.region ? undefined : () => "Country"}
          >
            {country.map((item, index) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </StyledSelect>
          <StyledTextField
            placeholder="Enter your Password"
            type="password"
            value={user.password}
            id="password"
            name="password"
            onChange={handleInputChange}
          />
          <StyledTextField
            placeholder="Enter your confirm Password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleInputChange}
          />
          <Agreement>
            I authorize the website to take my credentials.
          </Agreement>
          <StyledButton onClick={handleSubmit}>Register</StyledButton>
          <Link to="/login">
            <StyledButton style={{ marginLeft: "10px" }}>Login</StyledButton>
          </Link>
        </Form>
      </Wrapper>
    </BackgroundContainer>
  );
};

export default Register;
