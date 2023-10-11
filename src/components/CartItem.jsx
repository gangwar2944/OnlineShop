import React from "react";
import styled from "styled-components";
import { imageUrl } from "../requestMethods";
import { mobile } from "../responsive";
import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";
import { delProducts } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { FaStarHalfAlt, FaRupeeSign } from "react-icons/fa";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 100%;
  margin: auto;
  height: 200px;
  margin-bottom: 20px;
  background-color: #f2f2f2;
  ${mobile({ flexDirection: "column", margin: "10px" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const ImgContainer = styled.div`
  width: 200px;
  height: 150px;
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Details = styled.div`
  padding: 10px;
  display: flex;
  flex: 3;
  justify-content: flex-start;
  flex-direction: column;
`;
const DeleveryDetail = styled.div`
  padding: 10px;
  flex: 2;
`;
const ProductName = styled.span`
  margin:0 0 5px 0;
  font-size: 16px;
`;
const ProductColorContainer = styled.div`
  display: flex;
  margin: 5px 0;
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 10px;
`;
const ProductSize = styled.span`
  margin: 5px 0;
`;
const PriceDetail = styled.div`
  /* flex:1; */
  margin: 5px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProductTitle = styled.p`
  font-size: 20px;
`;
const ProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  /* width: 161px; */
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5px;
`;
const ProductRemove = styled.div`
  /* margin-bottom:15px; */
  flex: 3;
`;
const ExtraContainer = styled.div`
    flex: 2;
`
const ProductAmount = styled.div`
  font-size: 18px;
  width: 50px;
  height: 25px;
  background-color: #fff;
  text-align: center;
  border: 1px solid;
`;
const ProductPrice = styled.div`
display: flex;
align-items: center;
  margin-top: 5px;
  font-size: 18px;
  font-weight: 700;
`;
const Span = styled.span`
  background-color: #fff;
`;
const RemoveButton = styled.button`
  text-transform: uppercase;
  font-weight: 500;
  margin: 0 15px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
`;
const CartItem = (props) => {
  const dispatch = useDispatch();
  const product = props.product;
  const delItem = (product) => {
    dispatch(delProducts(product));
    // console.log(res.data)
  };
  return (
    <div>
      <Product key={product.id}>
        <ProductDetail>
          <ImgContainer>
            <Image src={`${imageUrl}/${product.image}`}></Image>
          </ImgContainer>
          <Details>
            <ProductName>
              {" "}
              <ProductTitle>{product.title}</ProductTitle>
            </ProductName>
            {/* <ProductId> <b>ID:</b> {product.id}</ProductId> */}
            <ProductColorContainer>
              <span style={{ color: "gray" }}>Color: </span>{" "}
              <ProductColor color={product.color}></ProductColor>
            </ProductColorContainer>
            <ProductSize>
              {" "}
              <span style={{ color: "gray" }}>Size : </span>
              {product.size}
            </ProductSize>
            <ProductPrice><FaRupeeSign />{product.price * product.quantity}</ProductPrice>
          </Details>
          <DeleveryDetail>
            <p>Delivery by Sat Oct 14 | ₹40Free</p>
          </DeleveryDetail>
        </ProductDetail>
        <PriceDetail>
          <ProductQuantityContainer>
            <IoIosRemoveCircleOutline
              style={{
                fontSize: "30px",
                backgroundColor: "#fff",
                borderRadius: "50%",
              }}
            />
            <ProductAmount>
              <Span>{product.quantity}</Span>
            </ProductAmount>
            <IoIosAddCircleOutline
              style={{
                fontSize: "30px",
                backgroundColor: "#fff",
                borderRadius: "50%",
              }}
            />
          </ProductQuantityContainer>
          <ProductRemove style={{ position: "relative" }}>
            {/* <b>Remove:</b> */}
            <RemoveButton>Save for later</RemoveButton>
            <RemoveButton onClick={() => delItem(product)}>Remove</RemoveButton>
          </ProductRemove>
          <ExtraContainer></ExtraContainer>
        </PriceDetail>
      </Product>
    </div>
  );
};

export default CartItem;
