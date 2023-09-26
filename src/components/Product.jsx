import React from 'react'
import styled from "styled-components";
import {AiOutlineShoppingCart,AiOutlineSearch,AiOutlineHeart} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { imageUrl } from '../requestMethods';

const Info = styled.div` 

    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:3;
    transition: all 0.5s ease;
    cursor:pointer;
    
`
const Container = styled.div`
     flex:1;
     margin:5px;
     min-width:280px;
     height:350px;
     display:flex;
     justify-content:center;
     align-items:center;
     background-color:#f5fbfd;
     position:relative;

&:hover ${Info}{
     opacity:1;
}
`
const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    position:absolute;
    background-color:#fff;
`
const ImgConatainer = styled.div`
     height:75%;
     z-index:2;
`
const Image = styled.img`
     height:100%;
     width: 100%;
     object-fit: cover;
`

const Icon = styled.div`
    font-size:25px;
    margin:0 10px;
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.5s ease;

&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
}
`

const Product = ({item}) => {

  return (
    
    <>
   
        <Container>
            <Circle/>
              <ImgConatainer>
                 <Image src={`${imageUrl}/${item.image}`} alt="photo" />
              </ImgConatainer>
             
             <Info>
                   <Icon>
                       <AiOutlineShoppingCart/>
                   </Icon>
                   <Icon>
                    <Link to={`/product/${item.id}`}>
                       <AiOutlineSearch/>
                    </Link>                      
                   </Icon>
                   <Icon>
                       <AiOutlineHeart/>
                   </Icon>
             </Info>
          
        </Container>
    </>
  )
}

export default Product