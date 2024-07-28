import React, { useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import Navbar from "../../commonComponents/Navbar";
import Footer from "../../commonComponents/Footer";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { FaStarHalfAlt, FaRupeeSign } from "react-icons/fa";
import AddressCard from "../address/AddressCard";

const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'self-end',
  flexDirection: 'column',
  alignContent: 'space-between',
  height: '100vh',
  background: '#f1fcfa',
}));

const Wrapper = styled('div')(({ theme }) => ({
  margin: '10px',
  display: 'flex',
  height: '150px',
  background: '#fff',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  width: '95%',
}));

const ImgContainer = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
}));

const PriceDetail = styled('div')(({ theme }) => ({
  flex: 2,
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '20px',
}));

const StyledImgContainer = styled('div')(({ theme }) => ({
  width: '90px',
  height: '90px',
  margin: '20px',
}));

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
}));

const ProductDetail = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '20px',
  flexDirection: 'column',
}));

const OrderDelivery = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '20px',
  flexDirection: 'column',
}));

const H5 = styled('h4')(({ theme }) => ({}));

const Para = styled('div')(({ theme }) => ({
  marginTop: '5px',
  color: 'gray',
}));

const Para2 = styled('p')(({ theme }) => ({}));

const Price = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: '10px',
}));

const OrderDetailPage = () => {
  const steps = ['Order Confirmed ', 'Shipped', 'Out For Delivery', 'Delivered'];
  const [address, setAddress] = useState({
    id: 1,
    firstname: "Vishal",
    lastname: "Gangwar",
    city: "Noida",
    country: "India",
    landmark: "Near royal infield egency",
    area: "rawcubes India private limited",
    pinCode: "201301",
    phoneNumber: "8840216454",
    userId: null,
  });

  return (
    <MainContainer>
      <Navbar />
      <Container>
        <Box sx={{ marginTop: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <AddressCard data={address} sx={{ margin: '10px' }} />
          <Wrapper>
            <ImgContainer>
              <StyledImgContainer>
                <Image src="https://rukminim2.flixcart.com/image/xif0q/computer/9/d/n/-original-imaguyhzhbhqe8qj.jpeg" alt="image" />
              </StyledImgContainer>
            </ImgContainer>
            <ProductDetail>
              <Para2>this product is lovely.</Para2>
              <Para>Color : Arctic Grey</Para>
              <Price>
                <FaRupeeSign />
                <Typography variant="h4">37500</Typography>
                <Para sx={{ color: 'green', margin: '0 10px' }}> 9 offers applied?</Para>
              </Price>
            </ProductDetail>
            <PriceDetail>
              <Box sx={{ width: '100%' }}>
                <Stepper activeStep={4} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </PriceDetail>
            <OrderDelivery>
              <H5 sx={{ color: 'blue' }}>Need help?</H5>
            </OrderDelivery>
          </Wrapper>
        </Box>
      </Container>
      <Footer />
    </MainContainer>
  );
};

export default OrderDetailPage;
