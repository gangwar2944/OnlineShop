import React from "react";
import { styled } from "@mui/system";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaStarHalfAlt, FaRupeeSign } from "react-icons/fa";

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
  height: '120px',
  background: '#fff',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
}));

const ImgContaner = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const PriceDetail = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '20px',
}));

const ImgContainer = styled('div')(({ theme }) => ({
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
  flex: 2,
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '20px',
  flexDirection: 'column',
}));

const OrderDelivery = styled('div')(({ theme }) => ({
  flex: 1.5,
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

const Order = () => {
  return (
    <MainContainer>
      <Navbar />
      <Container>
        <div style={{ marginTop: "70px" }}>
          {[0, 0, 0, 0].map((item, index) => (
            <Wrapper key={index}>
              <ImgContaner>
                <ImgContainer>
                  <Image
                    src="https://rukminim2.flixcart.com/image/xif0q/computer/9/d/n/-original-imaguyhzhbhqe8qj.jpeg"
                    alt="image"
                  />
                </ImgContainer>
              </ImgContaner>
              <ProductDetail>
                <Para2>This product is lovely.</Para2>
                <Para>Color: Arctic Grey</Para>
              </ProductDetail>
              <PriceDetail>
                <FaRupeeSign />
                37500
              </PriceDetail>
              <OrderDelivery>
                <H5>Expected delivery 20/10/2023</H5>
                <Para>Order has been placed</Para>
              </OrderDelivery>
            </Wrapper>
          ))}
        </div>
      </Container>
      <Footer />
    </MainContainer>
  );
};

export default Order;
