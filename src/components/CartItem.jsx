import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { imageUrl } from "../requestMethods";
import { mobile } from "../responsive";
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";

const Product = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  margin: '10px',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  width: '100%',
  margin: 'auto',
  height: '200px',
  marginBottom: '20px',
  backgroundColor: '#fff',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    margin: '10px',
  },
}));

const ProductDetail = styled(Box)(({ theme }) => ({
  flex: 2,
  display: 'flex',
}));

const ImgContainer = styled(Box)(({ theme }) => ({
  width: '200px',
  height: '150px',
  flex: 1,
}));

const Image = styled('img')({
  width: '100%',
  height: '100%',
});

const Details = styled(Box)(({ theme }) => ({
  padding: '10px',
  display: 'flex',
  flex: 3,
  justifyContent: 'flex-start',
  flexDirection: 'column',
}));

const DeleveryDetail = styled(Box)(({ theme }) => ({
  padding: '10px',
  flex: 2,
}));

const ProductName = styled(Typography)({
  margin: '0 0 5px 0',
  fontSize: '16px',
});

const ProductColorContainer = styled(Box)({
  display: 'flex',
  margin: '5px 0',
});

const ProductColor = styled(Box)(({ color }) => ({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: color,
  margin: '0 10px',
}));

const ProductSize = styled(Typography)({
  margin: '5px 0',
});

const PriceDetail = styled(Box)({
  margin: '5px 0',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const ProductTitle = styled(Typography)({
  fontSize: '20px',
});

const ProductQuantityContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 600,
  flex: 1,
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '5px',
});

const ProductRemove = styled(Box)({
  flex: 3,
});

const ExtraContainer = styled(Box)({
  flex: 2,
});

const ProductAmount = styled(Box)({
  fontSize: '18px',
  width: '50px',
  height: '25px',
  backgroundColor: '#fff',
  textAlign: 'center',
  border: '1px solid',
});

const ProductPrice = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginTop: '5px',
  fontSize: '18px',
  fontWeight: 700,
});

const Span = styled(Box)({
  backgroundColor: '#fff',
});

const RemoveButton = styled(Button)({
  textTransform: 'uppercase',
  fontWeight: 500,
  margin: '0 15px',
  fontSize: '16px',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
});

const CartItem = (props) => {
  const { product } = props;

  const delItem = (product) => {
    // Implement delete item logic
  };

  return (
    <Product key={product.id}>
      <ProductDetail>
        <ImgContainer>
          <Image src={`${imageUrl}/${product.image}`} alt={product.title} />
        </ImgContainer>
        <Details>
          <ProductName>
            <ProductTitle>{product.title}</ProductTitle>
          </ProductName>
          <ProductColorContainer>
            <Typography variant="body2" color="textSecondary">Color:</Typography>
            <ProductColor color={product.color} />
          </ProductColorContainer>
          <ProductSize>
            <Typography variant="body2" color="textSecondary">Size:{product.size}</Typography>
            
          </ProductSize>
          <ProductPrice>
            <FaRupeeSign />
            {product.price * product.quantity}
          </ProductPrice>
        </Details>
        <DeleveryDetail>
          <Typography variant="body2">Delivery by Sat Oct 14 | ₹40 Free</Typography>
        </DeleveryDetail>
      </ProductDetail>
      <PriceDetail>
        <ProductQuantityContainer>
          <IoIosRemoveCircleOutline
            style={{
              fontSize: '30px',
              backgroundColor: '#fff',
              borderRadius: '50%',
            }}
          />
          <ProductAmount>
            <Span>{product.quantity}</Span>
          </ProductAmount>
          <IoIosAddCircleOutline
            style={{
              fontSize: '30px',
              backgroundColor: '#fff',
              borderRadius: '50%',
            }}
          />
        </ProductQuantityContainer>
        <ProductRemove>
          <RemoveButton>Save for later</RemoveButton>
          <RemoveButton onClick={() => delItem(product)}>Remove</RemoveButton>
        </ProductRemove>
        <ExtraContainer />
      </PriceDetail>
    </Product>
  );
};

export default CartItem;
