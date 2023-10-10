import React, { useEffect } from 'react'
import {AiOutlineHome, AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
import {FiLogOut,FiLogIn} from 'react-icons/fi'
import './css/style.css';
import styled from "styled-components";
import {mobile,tablate} from "../responsive"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userRedux';
import { saveCartData } from '../redux/apiCalls';
import { moveProductsFromCartToDatabase } from '../redux/cartRedux';
import { deleteAddress } from '../redux/addressRedux';

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0%;
    z-index: 1000;
`
const AiOutlineHomeLogo = styled.div`
    
`
const Navbars = styled.div`
    
    width: 100%;
    height: 60px;
    background-color:#fff;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.05);
    ${mobile({height:"50px"})}
`
const Search = styled.div`
     font-size: 25px;
     width: 50%;
     display: flex;
     justify-content: center;
    position: relative;
    ${mobile({fontSize:"18px",display:"none"})};
    ${tablate({fontSize:"18px"})};
`
const Input = styled.input`
   margin: 0 10px;
   width: 70%;
   padding: 8px 20px;  
   border-radius: 10px; 
   border: 1px  solid rgb(92, 87, 87);
   outline: none;
   ${mobile({margin:"0 5px",padding:"8px"})};
   ${tablate({margin:"0 5px",padding:"8px"})};

`
const Logo = styled.div`
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
    ${mobile({fontSize:"20px",fontWeigth:"700",marginLeft:"10px"})};
    ${tablate({fontSize:"20px",fontWeigth:"700"})};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
`
const Span = styled.span`
    margin: 0 5px;
    ${mobile({marginLeft:"2.5px"})};
 `
const ClassIcon = styled.span`
     position: absolute; 
    top: 25%;
    right: 17%;
    /* transition: translateX(-20px); */
    font-size: 20px;
`
const Links = styled.div`
     display:flex ;
   justify-content: center;
   align-items: center;
`
const Register = styled.span`
      margin:0 20px ;
   text-decoration: none;
   color: #000;
   font-size: 20px;
   ${mobile({fontSize:"18px",margin:"0 10px"})}
`
const Login = styled.span`
      margin:0 20px ;
   text-decoration: none;
   color: #000;
   font-size: 20px;
   ${mobile({fontSize:"18px",margin:"0 10px"})}
`
const Button  = styled.button`
   margin:0 20px ;
   text-decoration: none;
   color: #000;
   background: #e4e3e3;
   font-size: 16px;
   padding:4px 8px;
   border:0.5px solid black;
   border: none;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   border-radius: 5px;
   ${mobile({fontSize:"14px",margin:"0 10px"})}
`
const ShopingCart = styled.div`
    position: relative;
`
const CartIcon = styled.span`
    margin:0 20px ;
   text-decoration: none;
   color: #000;
   font-size: 20px;
`
const CartItemCount = styled.div`
    position: absolute;
    top: -8px;
    right: 15px;
    background-color: blue;
    color: aliceblue;
    width:15px;
    height: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
`
const Signoutbtn= styled.div`
    margin:5px 10px;
    background-color: teal;
    color: #fff;
    width:100px;
    border-radius:5px;
    padding:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`
const Navbar = () => {
    const [cartData,setCartData] = useState({
        userId:{},
        products:[],
        quantity:0,
        total:0
    })
    const dispatch = useDispatch();
    let quantity = useSelector(state=>state.cart.quantity);
    const cart = useSelector(state=>state.cart);
    // console.log(cart.products)
    const user=useSelector(state=>state.user.currentUser) 
    // const cuser=useSelector(state=>state.user) 

  useEffect(()=>{
      setCartData({
        userId:user,
        products:cart.products,
        quantity:cart.quantity,
        total:cart.total
    })
  },[])
  
   const userLogout =() =>{
        if(cartData.quantity>0){
            saveCartData(cartData);
        }
        dispatch(moveProductsFromCartToDatabase());
        dispatch(deleteAddress());
        dispatch(logout());
       
   }
    
  
  return (
    <>
        <NavContainer>
            <Navbars>
               
                <Logo>
                    <Span><Link to="/"><AiOutlineHome style={{color:"#000",marginTop:"5px"}}/></Link> </Span>             
                    <Span>v-shop</Span>
                </Logo>
                 <Search>
                    <Input type="text" placeholder='search...'/>
                    <ClassIcon><AiOutlineSearch /></ClassIcon> 
                </Search>
                <Links>
                    
                    { user ? <Signoutbtn onClickCapture={userLogout}>Sign out <FiLogOut style={{marginLeft:"5px"}}/> </Signoutbtn>  : <> <Link to="/register"><Signoutbtn>Register</Signoutbtn></Link>
                    <Link to="/login"><Signoutbtn >Login <FiLogIn/></Signoutbtn></Link></>}
                    <ShopingCart>
                        <CartIcon><Link to="/cart" ><AiOutlineShoppingCart/></Link></CartIcon>                       
                        {(quantity<1)?" ":<CartItemCount>{quantity}</CartItemCount>}
                     </ShopingCart>
                </Links>
            </Navbars>
        </NavContainer>
    </>
  )
}

export default Navbar