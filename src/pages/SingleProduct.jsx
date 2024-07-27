import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../services/redux/store";
import { addToCart } from "../services/redux/cart/reducer";
import { toast } from "react-toastify";
import { Container, Box, Typography, Button, styled, LinearProgress } from "@mui/material";
import { FaStarHalfAlt, FaRupeeSign, FaStar } from "react-icons/fa";
import { IoIosRemoveCircleOutline, IoIosAddCircleOutline } from "react-icons/io";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { imageUrl } from "../requestMethods";
import { mobile } from "../responsive";

const MainContainer = styled(Box)``;

const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: "70px",
  display: "flex",
  backgroundColor: "aliceblue",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const ImgContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  width: "500px",
  display: "grid",
  placeItems: "center",
  height: "600px",
  padding: "5px",
  border: "1px solid #c9c7c7",
  borderRadius: "5px",
}));

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  overflow: "hidden",
  borderRadius: "5px",
});

const InfoContainer = styled(Box)({
  flex: 1,
  padding: "30px",
});

const Title = styled(Typography)({
  margin: 0,
});

const Disc = styled(Typography)({
  letterSpacing: "1px",
  fontSize: "18px",
  margin: "5px 0",
});

const Price = styled(Typography)({
  display: "flex",
  alignItems: "center",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "5px 0",
});

const PriceDetail = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

const ActualPrice = styled(Typography)({
  display: "flex",
  alignItems: "center",
  margin: "0 8px",
  textDecoration: "line-through",
  color: "#2f2e2e",
});

const PercentDiscount = styled(Typography)({
  margin: "0 8px",
  color: "teal",
});

const FiterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "5px 0",
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Filter = styled(Box)({
  flex: 1,
  display: "flex",
  alignItems: "center",
});

const FilterTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: "200",
});

const AddContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "50%",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "20px 0",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const AmountContainer = styled(Box)({
  display: "flex",
  fontWeight: "700",
  alignItems: "center",
});

const RemoveAndAdd = styled(Button)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid teal",
  fontWeight: "700",
  fontSize: "25px",
  border: "none",
  cursor: "pointer",
  minWidth: "40px",
});

const Amount = styled(Box)({
  display: "flex",
  width: "25px",
  height: "25px",
  borderRadius: "5px",
  fontWeight: "700",
  alignItems: "center",
  border: "1px solid teal",
  justifyContent: "center",
  margin: "0 10px",
});

const ProductInfoContainer = styled(Box)({
  width: "100%",
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "15px",
  marginBottom: "15px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  flex: 1,
  border: "1px solid teal",
  color: "teal",
  backgroundColor: "transparent",
  padding: "10px",
  borderRadius: "4px",
  margin: "0 5px",
  backgroundColor: "teal",
  color: "#fff",
  cursor: "pointer",
  '&:hover': {
    backgroundColor: "#155d5d",
    border: "none",
    color: "#fff",
  },
}));

const ProductImageAndButton = styled(Box)({
  width: "500px",
});

const ButtonContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
});

const Rating = styled(Box)({
  display: "flex",
  backgroundColor: "teal",
  alignItems: "center",
  width: "50px",
  color: "#fff",
  padding: "5px",
  borderRadius: "5px",
  margin: "5px 0",
});

const RatingReviewCOntainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

const RatingProgressbarContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const RatingReview = styled(Box)({
  flex: 2,
});

const RatingContainer = styled(Box)({
  margin: "15px 0",
  display: "flex",
  color: "teal",
});

const RatingReviewsbar = styled(Box)({
  flex: 4,
});

const Label = styled(Typography)({
  flex: 1,
  margin: "5px 0",
});

const Sizebutton = styled(Button)(({ theme, isSelected }) => ({
  width: "40px",
  height: "40px",
  margin: "5px",
  marginTop: "10px",
  outline: "none",
  border: "none",
  backgroundColor: "#b6b6b6",
  transition: "background-color 0.3s",
  '&:hover': {
    backgroundColor: "teal",
    color: "#fff",
  },
  ...(isSelected && {
    backgroundColor: "teal",
    color: "#fff",
  }),
}));

const CustomLinearProgress = styled(LinearProgress)(({ theme, progress }) => ({
  backgroundColor: "lightgray",
  "& .MuiLinearProgress-bar": {
    backgroundColor: getColorForProgress(progress),
  },
}));

function getColorForProgress(progress) {
  if (progress < 33.33) {
    return "red";
  } else if (progress < 66.67) {
    return "orange";
  } else {
    return "green";
  }
}

const SingleProduct = () => {
  const location = useLocation();
  const sizeArr = [
    { id: 1, name: "S" },
    { id: 2, name: "M" },
    { id: 3, name: "L" },
    { id: 4, name: "XL" },
    { id: 5, name: "XXL" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setProduct(location.state.product);
  }, [location.state.product]);

  const handleQuantity = (type) => {
    if (type === "incre") {
      setQuantity(quantity + 1);
    } else if (type === "dec") {
      setQuantity(quantity > 1 ? quantity - 1 : 1);
    }
  };

  const handleSizeButtonClick = (value) => {
    setSelectedItem(value);
    setProduct({ ...product, size: value });
  };

  const handleClick = async () => {
    await dispatch(addToCart({ ...product, quantity }));
    toast.success("Product added to cart successfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const buyNow = () => {
    console.log("Buy now");
  };

  return (
    <>
      <MainContainer>
        <Navbar />
        <Container>
          <Wrapper>
            <ProductImageAndButton>
              <ImgContainer>
                <Image src={`${imageUrl}/${product.image}`} />
              </ImgContainer>
              <ButtonContainer>
                <StyledButton onClick={handleClick}>ADD TO CART</StyledButton>
                <StyledButton onClick={buyNow}>BUY NOW</StyledButton>
              </ButtonContainer>
            </ProductImageAndButton>

            <InfoContainer>
              <ProductInfoContainer>
                <Title variant="h4">{product.title}</Title>
                <PriceDetail>
                  <Price>
                    <FaRupeeSign /> {product.price}
                  </Price>
                  <ActualPrice>
                    <FaRupeeSign />
                    {product.price + 200}
                  </ActualPrice>
                  <PercentDiscount>
                    {Math.floor(200 / ((product.price + 200) / 100))}% off
                  </PercentDiscount>
                </PriceDetail>
                <RatingReviewCOntainer>
                  <Rating>
                    <Typography variant="body2" sx={{ marginRight: "5px" }}>
                      4.5
                    </Typography>
                    <FaStarHalfAlt style={{ fontSize: "12px" }} />
                  </Rating>
                  <Typography variant="body2" sx={{ marginLeft: "5px", color: "gray" }}>
                    1647 Ratings, 459 Reviews
                  </Typography>
                </RatingReviewCOntainer>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  Free Delivery
                </Typography>
              </ProductInfoContainer>

              <ProductInfoContainer>
                <Title>Select Size</Title>
                {sizeArr.map((item) => (
                  <Sizebutton
                    key={item.id}
                    isSelected={selectedItem === item.name}
                    onClick={() => handleSizeButtonClick(item.name)}
                  >
                    {item.name}
                  </Sizebutton>
                ))}
              </ProductInfoContainer>

              <ProductInfoContainer>
                <Title>Quantity</Title>
                <AddContainer>
                  <AmountContainer>
                    <RemoveAndAdd onClick={() => handleQuantity("dec")}>
                      <IoIosRemoveCircleOutline />
                    </RemoveAndAdd>
                    <Amount>{quantity}</Amount>
                    <RemoveAndAdd onClick={() => handleQuantity("incre")}>
                      <IoIosAddCircleOutline />
                    </RemoveAndAdd>
                  </AmountContainer>
                </AddContainer>
              </ProductInfoContainer>

              <ProductInfoContainer>
                <Title>Product Details</Title>
                <Disc>Name : {product.description}</Disc>
                <FiterContainer>
                  <Filter>
                    <FilterTitle>Color : {product.color}</FilterTitle>
                  </Filter>
                </FiterContainer>
                <Disc>Fabric : Cotton</Disc>
                <Disc>Pattern : Solid</Disc>
                <Disc>Net Quantity : 1</Disc>
                <Disc>Country of Origin : India</Disc>
              </ProductInfoContainer>

              <ProductInfoContainer>
                <Title>Product Ratings & Reviews</Title>
                <RatingProgressbarContainer>
                  <RatingReview>
                    <RatingContainer>
                      <Typography variant="h5" sx={{ marginRight: "5px" }}>
                        4.5
                      </Typography>
                      <FaStar style={{ fontSize: "30px" }} />
                    </RatingContainer>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      1647 Ratings, 459 Reviews
                    </Typography>
                  </RatingReview>
                  <RatingReviewsbar>
                    {["Excellent", "Very Good", "Good", "Average", "Poor"].map((label, index) => (
                      <Box key={index}>
                        <Label>{label}</Label>
                        <CustomLinearProgress variant="determinate" progress={index * 20 + 20} />
                      </Box>
                    ))}
                  </RatingReviewsbar>
                </RatingProgressbarContainer>
              </ProductInfoContainer>
            </InfoContainer>
          </Wrapper>
        </Container>
        <Newsletter />
        <Footer />
      </MainContainer>
    </>
  );
};

export default SingleProduct;
