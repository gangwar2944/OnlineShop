import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { userRequest } from "../requestMethods";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import { styled, useTheme } from "@mui/material/styles";
import { Button, Typography, Box } from "@mui/material";

const Wrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(7.5),
}));

const Top = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: "20px",
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'space-around',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  padding: "20px",
}));

const TopButton = styled(Button)(({ theme, type }) => ({
  padding: theme.spacing(1.25),
  fontWeight: 600,
  cursor: 'pointer',
  border: type === "filled" ? 'none' : 'initial',
  backgroundColor: type === "filled" ? 'black' : 'transparent',
  color: type === "filled" ? 'white' : 'initial',
}));

const TopTexts = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const TopText = styled(Typography)(({ theme }) => ({
  textDecoration: 'underline',
  margin: theme.spacing(0, 1.25),
  cursor: 'pointer',
}));

const Bottom = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '70%',
  margin: 'auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const Info = styled('div')(({ theme }) => ({
  flex: 3,
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1.25),
  },
}));

const Image = styled('img')({
  width: 150,
  maxHeight: 160,
  flex: 1,
});

const StyledButton = styled(Button)(({ theme }) => ({
  flex: 1,
  border: "1px solid teal",
  color: "teal",
  backgroundColor: "transparent",
  padding: "10px",
  borderRadius: "4px",
  margin: "0 5px",
  backgroundColor: "teal",
  color: "#fff",
  cursor: "pointer",
  '&:hover': {
    backgroundColor: "#155d5d",
    border: "none",
    color: "#fff",
  },
}));

const EmptyContainer = styled(Box)({
  width: '100vw',
  height: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Empty = styled(Box)(({ theme }) => ({
  padding: "20px",
}));

const Heading = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2.5),
}));

const Small = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(2.5, 0),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const FooterContainer = styled(Box)({
  textAlign: 'right',
});

const Cart = () => {
  const theme = useTheme();
  const cart = useSelector((state) => state.cart.cartDataState.carts);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: cart.total * 100,
          }
        );
        navigate("/success", { data: res.data });
      } catch {}
    };
    if (stripeToken) makeRequest();
  }, [stripeToken, cart.total, navigate]);

  const redirectAddressPage = () => {
    navigate("checkout?step=2");
  };

  return (
    <Box>
      <Navbar />
      {cart.length > 0 ? (
        <Wrapper>
          <Title variant="h5">Your Bag</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your WishList(0)</TopText>
            </TopTexts>
          </Top>
          <Bottom>
            <Info>
              {cart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
              <FooterContainer>
                <StyledButton onClick={redirectAddressPage}>Place Order</StyledButton>
              </FooterContainer>
            </Info>
          </Bottom>
        </Wrapper>
      ) : (
        <EmptyContainer>
          <Empty>
            <Image src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
            <Heading variant="h3">Your cart is Empty</Heading>
            <Small>Add items to it now.</Small>
            <Link to="/">
              <StyledButton>Start Shopping</StyledButton>
            </Link>
          </Empty>
        </EmptyContainer>
      )}
      <Footer />
    </Box>
  );
};

export default Cart;
