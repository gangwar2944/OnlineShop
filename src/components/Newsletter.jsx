import React from 'react'
import styled from 'styled-components'
import {AiOutlineSend} from "react-icons/ai"
import { mobile } from '../responsive'
const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${mobile({height:"50vh"})}
`
const Title = styled.h1`
    font-size: 50px;
    margin-bottom:15px ;
`
const Discription = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 300;
    ${mobile({textAlign:"center"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width:"80%"})}
`
const Input = styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;
   
`
const Button = styled.button`
    flex: 1;
    background-color: teal;
    color: #fff;
    border: none;
    cursor: pointer;
    
`
const Newsletter = () => {
  return (
    <>
       <Container>
          <Title>Newsletter</Title>
          <Discription>Get timely update from your favorite product. </Discription>
          <InputContainer>
             <Input placeholder='Enter your email'/>
             <Button>
                 <AiOutlineSend/>
             </Button>
          </InputContainer>
       </Container>
    </>
  )
}

export default Newsletter