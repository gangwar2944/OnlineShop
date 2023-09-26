import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { imageUrl } from '../requestMethods';

const Container = styled.div`
    flex:1;
    width: 98vw;
    margin: 3px;
    background-color: aliceblue;
    position: relative;
`
const CategoryItems = styled.div`
   width: 100%;
    height: 500px;
    
`
const Image = styled.img`
   width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`
const InfoTitle = styled.h5`
  font-size: 25px;
    color: #fff;
    margin: 10px;
    /* box-shadow: 2px 2px 2px black; */
    text-shadow: 2px 2px 2px black ;
    text-transform: uppercase;
`
const Button = styled.button`
   background-color: #fff;
    border: none;
    color: rgb(131, 129, 129);
    padding: 10px;
    cursor: pointer;
    font-weight: 700;
`
const CategoryItem = ({ item }) => {
  return (
    <>
      <Container>
        <Link to={`/products/${item.id}`}>
        <CategoryItems>
          <Image src={`${imageUrl}/${item.img}`} alt="photo" />
          <Info>
            <InfoTitle>{item.title}</InfoTitle>
            <Button>SHOP NOW</Button>
          </Info>
        </CategoryItems>
        </Link>

      </Container>
    </>
  )
}

export default CategoryItem