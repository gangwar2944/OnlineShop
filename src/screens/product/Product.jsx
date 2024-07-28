import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { Box, Grid, styled, Typography } from "@mui/material";
import { imageUrl } from "../../requestMethods";

const Info = styled(Box)(({ theme }) => ({
  opacity: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 3,
  transition: 'all 0.5s ease',
  cursor: 'pointer',
}));

const Container = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1),
  width: 280,
  height: 350,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  flexDirection:"column",
  position: 'relative',
  '&:hover .info': {
    opacity: 1,
  },
}));

const Circle = styled(Box)(({ theme }) => ({
  width: 200,
  height: 200,
  borderRadius: '50%',
  position: 'absolute',
  backgroundColor: '#fff',
}));

const ImgContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  zIndex: 2,
}));

const Image = styled('img')(({ theme }) => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
}));

const Title = styled(Typography)(({ theme }) => ({ fontSize:"14px" ,fontWeight:"600"}));

const ProductName = styled(Typography)(({ theme }) => ({
  color: '#afacac',
  fontSize:"14px"
}));

const Price = styled(Typography)(({ theme }) => ({fontSize:"14px"}));

const Icon = styled(Box)(({ theme }) => ({
  fontSize: 25,
  margin: theme.spacing(0, 1),
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.5s ease',
  '&:hover': {
    backgroundColor: '#e9f5f5',
    transform: 'scale(1.1)',
  },
}));

const Product = ({ item }) => {
  return (
    <Grid item xs={6} md={4} lg={3} xl={2}>
      <Container>
        <Circle />
        <Box height="75%" zIndex={3}>
          <ImgContainer>
            <Image src={`${imageUrl}/${item.image}`} alt="photo" />
          </ImgContainer>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "5px",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Title>{item.title || "New Shoes"}</Title>
            <ProductName>{item.ProductName || "Product Name"}</ProductName>
            <Price>
              <b>₹{item.price || 200}</b>{" "}
              <span style={{ color: "#ccc" }} variant="body2">
                RS ₹3799
              </span>
              <span style={{ color: "orange" }}>(42% OFF)</span>
            </Price>
          </Box>
        </Box>
        <Info className="info">
          <Icon>
            <AiOutlineShoppingCart />
          </Icon>
          <Icon>
            <Link to={`/product/${item.id}`} state={{ product: item }}>
              <AiOutlineSearch />
            </Link>
          </Icon>
          <Icon>
            <AiOutlineHeart />
          </Icon>
        </Info>
      </Container>
    </Grid>
  );
};

export default Product;
