import { Container } from "@mui/system";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { FaStarHalfAlt, FaRupeeSign } from "react-icons/fa";
import AddressCard from "../Checkout/AddressCard";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-box-align: stretch;
  align-items: self-end;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  height: 100vh;
  background: #f1fcfa;
`;
const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  height: 150px;
  background: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 95%;
`;
const ImgContaner = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const PriceDetail = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;
const ImgContainer = styled.div`
  width: 90px;
  height: 90px;
  margin: 20px;
  /* background: #f1fcfa; */
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ProductDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  flex-direction: column;
`;
const OrderDelivery = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  flex-direction: column;
`;
const H5 = styled.h4``;
const Para = styled.div`
  margin-top: 5px;
  color: gray;
`;
const Para2 = styled.p``;
const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;
const OrderDetailPage = () => {
    const steps = [
        'Order Confirmed ',
        'Shipped',
        'Out For Delivery',
        'Delivered',
      ];

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
        userId:null
      });
  return (
    <MainContainer>
      <Navbar />
      <Container>
        <div style={{ marginTop: "70px",display: "flex",justifyContent: "center",alignItems: "center",flexDirection: "column"}}>
        <AddressCard data={address} style={{margin:"10px"}}/>
          <Wrapper>
            <ImgContaner>
              <ImgContainer>
                <Image
                  src="https://rukminim2.flixcart.com/image/xif0q/computer/9/d/n/-original-imaguyhzhbhqe8qj.jpeg"
                  alt="image"
                />
              </ImgContainer>
            </ImgContaner>
            <ProductDetail>
              <Para2>this product is lovly.</Para2>
              <Para>Color :Arctic Grey</Para>
              <Price>
                {" "}
                <FaRupeeSign />
                <h4>37500</h4>
                <Para style={{ color: "green", margin: "0 10px" }}>
                  {" "}
                  9 offer applied ?
                </Para>
              </Price>
            </ProductDetail>
            <PriceDetail>
              <Box sx={{ width: "100%" }}>
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
              <H5 style={{color:"blue"}}>Need help?</H5>
            </OrderDelivery>
          </Wrapper>
        </div>
      </Container>
      <Footer style={{}} />
    </MainContainer>
  );
};

export default OrderDetailPage;
