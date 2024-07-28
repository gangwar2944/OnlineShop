import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../services/redux/login/reducer";
import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../services/redux/store";

// Styled components using MUI's styled function
const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 1000,
}));

const Navbars = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '60px',
  backgroundColor: '#fff',
  color: '#000',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.05)',
  [theme.breakpoints.down('mobile')]: {
    height: '50px',
  },
}));

const Search = styled(Box)(({ theme }) => ({
  fontSize: '25px',
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  [theme.breakpoints.down('mobile')]: {
    fontSize: '18px',
    display: 'none',
  },
  [theme.breakpoints.down('tablet')]: {
    fontSize: '18px',
  },
}));

const Input = styled('input')(({ theme }) => ({
  margin: '0 10px',
  width: '70%',
  padding: '8px 20px',
  borderRadius: '10px',
  border: '1px solid rgb(92, 87, 87)',
  outline: 'none',
  [theme.breakpoints.down('mobile')]: {
    margin: '0 5px',
    padding: '8px',
  },
  [theme.breakpoints.down('tablet')]: {
    margin: '0 5px',
    padding: '8px',
  },
}));

const Logo = styled(Box)(({ theme }) => ({
  fontSize: '25px',
  fontWeight: 700,
  textTransform: 'uppercase',
  [theme.breakpoints.down('mobile')]: {
    fontSize: '20px',
    marginLeft: '10px',
  },
  [theme.breakpoints.down('tablet')]: {
    fontSize: '20px',
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#000',
}));

const Span = styled('span')(({ theme }) => ({
  margin: '0 5px',
  [theme.breakpoints.down('mobile')]: {
    marginLeft: '2.5px',
  },
}));

const ClassIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '25%',
  right: '17%',
  fontSize: '20px',
}));

const Links = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ShopingCart = styled(Box)(({ theme }) => ({
  position: 'relative',
}));

const CartIcon = styled(IconButton)(({ theme }) => ({
  margin: '0 20px',
  color: '#000',
  fontSize: '20px',
}));

const CartItemCount = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-8px',
  right: '15px',
  backgroundColor: 'blue',
  color: 'aliceblue',
  width: '15px',
  height: '15px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '14px',
}));

const Signoutbtn = styled(Box)(({ theme }) => ({
  margin: '5px 10px',
  backgroundColor: 'teal',
  color: '#fff',
  width: '100px',
  borderRadius: '5px',
  padding: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}));

const Navbar = () => {
  const [cartData, setCartData] = useState({
    userId: {},
    products: [],
    quantity: 0,
    total: 0,
  });
  const dispatch = useAppDispatch();
  const quantity = useSelector((state) => state.cart.cartDataState.quantity);
  const cart = useSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user.userDataState.userData);

  useEffect(() => {
    setCartData({
      userId: user,
      products: cart.products,
      quantity: cart.quantity,
      total: cart.total,
    });
  }, [user, cart]);

  const userLogout = () => {
    dispatch(logout());
  };

  return (
    <NavContainer>
      <Navbars>
        <Logo>
          <Span>
            <Link to="/">
              <AiOutlineHome style={{ color: "#000", marginTop: "5px" }} />
            </Link>
          </Span>
          <Span>v-shop</Span>
        </Logo>
        <Search>
          <Input type="text" placeholder="search..." />
          <ClassIcon>
            <AiOutlineSearch />
          </ClassIcon>
        </Search>
        <Links>
          {Object.keys(user).length > 0 ? (
            <Signoutbtn onClick={userLogout}>
              Sign out <FiLogOut style={{ marginLeft: "5px" }} />
            </Signoutbtn>
          ) : (
            <>
              <Link to="/register">
                <Signoutbtn>Register</Signoutbtn>
              </Link>
              <Link to="/login">
                <Signoutbtn>
                  Login <FiLogIn />
                </Signoutbtn>
              </Link>
            </>
          )}
          <ShopingCart>
            <CartIcon component={Link} to="/cart">
              <AiOutlineShoppingCart />
            </CartIcon>
            {quantity > 0 && <CartItemCount>{quantity}</CartItemCount>}
          </ShopingCart>
        </Links>
      </Navbars>
    </NavContainer>
  );
};

export default Navbar;
