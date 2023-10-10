import React, { useEffect, useState } from "react";
import AddressCard from "./AddressCard";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import CartItem from "../components/CartItem";
import Summary from "../components/Summary";

const MainContainer = styled.div`
    display: flex;
    padding: 20px;
    align-items: flex-start;
`
const AddressContainer = styled.div`
  pointer-events: none;
  flex: 1;
  /* margin: auto; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const CartContainer = styled.div`
  display:flex;
  flex: 3;
  overflow-y: auto; /* Enable vertical scrolling */
  /* Set a max height to limit the scrolling area */
  max-height: calc(100vh - 180px);
`;
const SummrayContainer = styled.div`
    flex: 1;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const OrderSummary = () => {
  const [address, setAddress] = useState({});
  const reduxAddress = useSelector((state) => state.address).currentAddress;
  console.log("add", reduxAddress);

  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    setAddress(reduxAddress);
  }, []);

  return (
    <MainContainer>
      <AddressContainer>
        <AddressCard data={address} />
      </AddressContainer>
      <CartContainer>
        <Container styled={{flex:"2"}}>
          {cart.products?.map((product) => (
            <CartItem product={product}/>
          ))}
        </Container>
      </CartContainer>
       <SummrayContainer styled={{flex:"1"}}>
            <Summary cart={cart} />
        </SummrayContainer>
    </MainContainer>
  );
};

export default OrderSummary;
