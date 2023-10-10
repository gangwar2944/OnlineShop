import { Container } from '@mui/system'
import React from "react";
import styled from "styled-components";
import {FaRupeeSign } from "react-icons/fa";

const SummaryTitle = styled.h1`
  font-weight: 200;
  margin-top: 5px;
`;
const SummaryItem = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "700"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span`
display:flex;
align-items: center;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: teal;
  color: #fff;
  border: none;
  text-transform: uppercase;
`;
const MainContainer = styled.div`
  /* padding: 10px; */
`;
const Summury = (props) => {
  const cart = props.cart;
  return (
    <>
      {" "}
      <MainContainer>
        <Container>
          <SummaryTitle>ORDER SUMMARY </SummaryTitle>
          <SummaryItem>
            <SummaryItemText>SubTotal</SummaryItemText>
            <SummaryItemPrice><FaRupeeSign/>{cart.total}</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimate Shipping</SummaryItemText>
            <SummaryItemPrice><FaRupeeSign/> 5</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice><FaRupeeSign/> -5</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice><FaRupeeSign/> {cart.total}</SummaryItemPrice>
          </SummaryItem>
          {/* <StripeCheckout
                                name='v-shop'
                                image="https://m.media-amazon.com/images/I/61-jBuhtgZL._UX569_.jpg"
                                billingAddress
                                shippingAddress
                                description={`your total is $ ${cart.total}`}
                                amount={cart.total * 100}
                                token={onToken}
                                stripeKey={KEY}
                            >
                                <Button onClick={redirectAddressPage}>CHECKOUT NOW</Button>
                            </StripeCheckout> */}
        </Container>
        <Button>CHECKOUT NOW</Button>
      </MainContainer>
    </>
  );
};

export default Summury;
