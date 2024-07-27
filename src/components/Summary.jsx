import React from "react";
import { Container, Typography, Button as MuiButton, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaRupeeSign } from "react-icons/fa";

// Styled components using Material-UI's styled utility
const SummaryTitle = styled(Typography)({
  fontWeight: 200,
  marginTop: 5,
});

const SummaryItem = styled(Box)(({ theme, type }) => ({
  margin: theme.spacing(2.5, 0),
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: type === "total" ? 700 : 'normal',
  fontSize: type === "total" ? '24px' : 'initial',
}));

const SummaryItemText = styled('span')({
  // Add any specific styles if needed
});

const SummaryItemPrice = styled('span')({
  display: 'flex',
  alignItems: 'center',
});

const CheckoutButton = styled(MuiButton)({
  width: '100%',
  padding: 10,
  backgroundColor: 'teal',
  color: '#fff',
  border: 'none',
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: 'darkcyan',
  },
});

const MainContainer = styled(Box)({
  // padding: theme.spacing(1.25), // If you need padding, uncomment and adjust
});

const Summury = (props) => {
  const { cart } = props;

  return (
    <MainContainer>
      <Container>
        <SummaryTitle variant="h5">ORDER SUMMARY</SummaryTitle>
        <SummaryItem>
          <SummaryItemText>SubTotal</SummaryItemText>
          <SummaryItemPrice><FaRupeeSign />{cart.total}</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Estimate Shipping</SummaryItemText>
          <SummaryItemPrice><FaRupeeSign /> 5</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Shipping Discount</SummaryItemText>
          <SummaryItemPrice><FaRupeeSign /> -5</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem type="total">
          <SummaryItemText>Total</SummaryItemText>
          <SummaryItemPrice><FaRupeeSign /> {cart.total}</SummaryItemPrice>
        </SummaryItem>
        {/* 
        <StripeCheckout
          name='v-shop'
          image="https://m.media-amazon.com/images/I/61-jBuhtgZL._UX569_.jpg"
          billingAddress
          shippingAddress
          description={`your total is $ ${cart.total}`}
          amount={cart.total * 100}
          token={onToken}
          stripeKey={KEY}
        >
          <CheckoutButton onClick={redirectAddressPage}>CHECKOUT NOW</CheckoutButton>
        </StripeCheckout> 
        */}
      </Container>
      <CheckoutButton>CHECKOUT NOW</CheckoutButton>
    </MainContainer>
  );
};

export default Summury;
