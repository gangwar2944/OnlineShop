import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import CategoryItem from './CategoryItem';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../services/redux/store';
import { getAllCategory } from '../services/redux/product/action';

// Use theme.breakpoints.down('sm') for mobile responsiveness
const Container = styled(Box)(({ theme }) => ({
  width: '98vw',
  backgroundColor: theme.palette.background.default,
}));

const CategoryContainer = styled(Box)(({ theme }) => ({
  marginTop: "60px", 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border:`1px solid ${theme.palette.grey[100]}`
//   flexDirection: theme.breakpoints.down('sm') ? 'column' : 'row',
}));

const Categories = () => {
  const categories =useAppSelector((state)=>state.product.categoryState.categoryList)

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategory())
  }, []);

  return (
    <Container>
      <CategoryContainer>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </CategoryContainer>
    </Container>
  );
};

export default Categories;
