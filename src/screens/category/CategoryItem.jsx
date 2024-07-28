import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button as MuiButton } from '@mui/material';
import { imageUrl } from '../../requestMethods';

const Container = styled(Box)(({ theme }) => ({
  flex: 1,
  width: '98vw',
  margin: '3px',
  backgroundColor: 'aliceblue',
  position: 'relative',
}));

const CategoryItems = styled(Box)({
  width: '100%',
  height: '500px',
});

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const Info = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
});

const InfoTitle = styled(Typography)({
  fontSize: '25px',
  color: '#fff',
  margin: '10px',
  textShadow: '2px 2px 2px black',
  textTransform: 'uppercase',
});

const Button = styled(MuiButton)({
  backgroundColor: '#fff',
  border: 'none',
  color: 'rgb(131, 129, 129)',
  padding: '10px',
  cursor: 'pointer',
  fontWeight: 700,
});

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.id}`}>
        <CategoryItems>
          <Image src={`${imageUrl}/${item.img}`} alt="photo" />
          <Info>
            <InfoTitle variant="h5">{item.title}</InfoTitle>
            <Button>SHOP NOW</Button>
          </Info>
        </CategoryItems>
      </Link>
    </Container>
  );
};

export default CategoryItem;
