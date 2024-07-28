import React from 'react';
import { styled } from '@mui/material/styles';
import { AiOutlineSend } from "react-icons/ai";
import { Box, Typography, InputBase, Button } from '@mui/material';

// Styled components using Material-UI's styled utility
const Container = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  height: '60vh',
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    height: '50vh',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '50px',
  marginBottom: theme.spacing(1.875),
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  marginBottom: theme.spacing(2.5),
  fontWeight: 300,
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

const InputContainer = styled(Box)(({ theme }) => ({
  width: '50%',
  height: '40px',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid lightgray',
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
}));

const Input = styled(InputBase)(({ theme }) => ({
  flex: 8,
  border: 'none',
  paddingLeft: theme.spacing(2.5),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  flex: 1,
  backgroundColor: 'teal',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'darkcyan',
  },
}));

const Newsletter = () => {
  return (
    <Container>
      <Title variant="h1">Newsletter</Title>
      <Description variant="body1">
        Get timely updates from your favorite products.
      </Description>
      <InputContainer>
        <Input placeholder='Enter your email' />
        <StyledButton>
          <AiOutlineSend />
        </StyledButton>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
