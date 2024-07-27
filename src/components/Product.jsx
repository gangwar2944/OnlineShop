import React from "react";
import styled from "styled-components";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { imageUrl } from "../requestMethods";
import { Box, Grid } from "@mui/material";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  margin: 5px;
  width: 280px;
  height: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
  border: 1px solid #ccc;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  background-color: #fff;
`;
const ImgContainer = styled.div`
  height: 100%;
  z-index: 2;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Title = styled.h5``;
const ProductName = styled.p`
  color: #afacac;
`;
const Price = styled.h5``;

const Icon = styled.div`
  font-size: 25px;
  margin: 0 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

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
              gap: "10px",
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

        <Info>
          <Icon>
            <AiOutlineShoppingCart />
          </Icon>
          <Icon>
            <Link to={`/product/${item.id}`} state={{ product: item }} exact>
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
