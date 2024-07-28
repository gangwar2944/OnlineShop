import React from 'react';
import { styled } from '@mui/material/styles';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Container = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  display: 'flex',
  backgroundColor: '#fff',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const Left = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
});

const Logo = styled('h1')({});

const Disc = styled('p')({
  margin: '20px 0',
});

const SocialContainer = styled('div')({
  display: 'flex',
});

const SocialIcon = styled('div')(({ color }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  color: '#fff',
  backgroundColor: `#${color}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  marginRight: '20px',
}));

const Center = styled('div')(({ theme }) => ({
  flex: 1,
  padding: '20px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    display: 'none',
  },
}));

const Title = styled('h3')({
  marginBottom: '20px',
  marginLeft: '0',
});

const List = styled('ul')({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
});

const Listitem = styled('li')({
  width: '50%',
  marginBottom: '5px',
});

const Right = styled('div')({
  flex: 1,
  padding: '20px',
});

const ContactItem = styled('div')({
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
});

const Payment = styled('img')({
  width: '50%',
});

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>V-Shop</Logo>
        <Disc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, cum alias. Hic facere esse eveniet magni molestias quam officia maiores.</Disc>
        <SocialContainer>
          <SocialIcon color='385999'>
            <AiFillFacebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <AiFillInstagram />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <AiFillYoutube />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <AiOutlineTwitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>UseFull Links</Title>
        <List>
          <Listitem>Home</Listitem>
          <Listitem>Cart</Listitem>
          <Listitem>Men Fashion</Listitem>
          <Listitem>Women Fashion</Listitem>
          <Listitem>Accessories</Listitem>
          <Listitem>My Account</Listitem>
          <Listitem>Order Tracking</Listitem>
          <Listitem>WishList</Listitem>
          <Listitem>WishList</Listitem>
          <Listitem>Term</Listitem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><FaMapMarkerAlt style={{ marginRight: "8px" }} />bareily uttar pradesh pincode-223001</ContactItem>
        <ContactItem><AiFillPhone style={{ marginRight: "8px" }} />+91 5841253689</ContactItem>
        <ContactItem><AiOutlineMail style={{ marginRight: "8px" }} />contact@email.com</ContactItem>
        <Payment src="https://ecoheater.ie/wp-content/uploads/2018/10/cards-.jpg" />
      </Right>
    </Container>
  );
}

export default Footer;
