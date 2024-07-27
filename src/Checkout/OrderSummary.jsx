import React, { useEffect, useState } from "react";
import AddressCard from "./AddressCard";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import CartItem from "../components/CartItem";
import Summary from "../components/Summary";
import { Grid } from "@mui/material";

const MainContainer = styled.div`
  width: "100%";
  padding: 20px;
`;
const AddressContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const CartContainer = styled.div`
  display: flex;
  overflow-y: auto; /* Enable vertical scrolling */
  /* Set a max height to limit the scrolling area */
  max-height: calc(100vh - 180px);
`;
const SummrayContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const OrderSummary = () => {
  const [address, setAddress] = useState({});
  const reduxAddress = useSelector(
    (state) => state.address.addressDataState.currentAddress
  );
  console.log("add", reduxAddress);

  const cart = useSelector((state) => state.cart.cartDataState.carts);
  useEffect(() => {
    setAddress(reduxAddress);
  }, []);

  return (
    <MainContainer>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <AddressContainer>
            <AddressCard data={address} />
          </AddressContainer>
        </Grid>
        <Grid item xs={6}>
          <CartContainer>
            <Container styled={{ flex: "2" }}>
              {cart?.map((product) => (
                <CartItem product={product} />
              ))}
            </Container>
          </CartContainer>
        </Grid>
        <Grid item xs={3}>
          <SummrayContainer styled={{ flex: "1" }}>
            <Summary cart={cart} />
          </SummrayContainer>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default OrderSummary;
