import { Container } from "@mui/system";
// import Container from "@mui/material/Container";
// import { display } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { FaStarHalfAlt, FaRupeeSign } from "react-icons/fa";

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
  /* margin-top: 90px; */
  display: flex;
  height: 120px;
  background: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const ImgContaner = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PriceDetail = styled.div`
  flex: 1;
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
  flex: 2;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  flex-direction: column;
`;
const OrderDelivery = styled.div`
  flex: 1.5;
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
const Order = () => {
  return (
    <MainContainer>
      <Navbar />
      <Container>
        <div style={{marginTop:"70px"}}>
          {[0, 0, 0, 0].map((item, index) => (
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
              </ProductDetail>
              <PriceDetail>
                <FaRupeeSign />
                37500
              </PriceDetail>
              <OrderDelivery>
                <H5>Expected delevery 20/10/2023</H5>
                <Para>Order has been placed</Para>
              </OrderDelivery>
            </Wrapper>
          ))}
        </div>
      </Container>
      <Footer style={{}} />
    </MainContainer>
  );
};

export default Order;
