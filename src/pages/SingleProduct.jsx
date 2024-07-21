import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { imageUrl, privateRequest } from "../requestMethods";
import { Container } from "@mui/system";
import { FaStarHalfAlt, FaRupeeSign, FaStar } from "react-icons/fa";
import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";
import { toast } from "react-toastify";
import LinearProgress from "@mui/material/LinearProgress";
// import { useAppDispatch } from "../services/redux/store";

const MainContainer = styled.div``;
const Wrapper = styled.div`
  margin-top: 70px;
  display: flex;
  background-color: aliceblue;
  ${mobile({ flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  width: 500px;
  display: grid;
  place-items: center;
  height: 600px;
  padding: 5px;
  border: 1px solid #c9c7c7;
  border-radius: 5px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 5px;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 30px;
`;
const Title = styled.h1`
  margin: 0px;
`;
const Disc = styled.p`
  letter-spacing: 1px;
  font-size: 18px;
  margin: 5px 0;
`;
const Price = styled.h3`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  margin: 5px 0;
`;
const PriceDetail = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ActualPrice = styled.del`
  display: flex;
  align-items: center;
  margin: 0 8px;
  text-decoration: line-through;
  color: #2f2e2e;
`;
const PercentDiscount = styled.div`
  margin: 0 8px;
  color: teal;
`;

const FiterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  width: 50%;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  font-weight: 700;
  align-items: center;
`;
const RemoveAndAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid teal;
  font-weight: 700;
  font-size: 25px;
  border: none;
  cursor: pointer;
`;
const Amount = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  font-weight: 700;
  align-items: center;
  border: 1px solid teal;
  justify-content: center;
  margin: 0 10px;
`;
const ProductInfoContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
`;
const Button = styled.button`
  flex: 1;
  border: 1px solid teal;
  color: teal;
  background-color: transparent;
  padding: 10px;
  border-radius: 4px;
  margin: 0 5px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #155d5d;
    border: none;
    color: #fff;
  }
`;
const ProductImageAndButton = styled.div`
  width: 500px;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const Rating = styled.div`
  display: flex;
  background-color: teal;
  align-items: center;
  width: 50px;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  margin: 5px 0;
`;
const RatingReviewCOntainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const RatingProgressbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RatingReview = styled.div`
  flex: 2;
`;
const RatingContainer = styled.div`
  margin: 15px 0;
  display: flex;
  color: teal;
`;
const RatingReviewsbar = styled.div`
  flex: 4;
`;
const Label = styled.div`
  flex: 1;
  margin: 5px 0;
`;

const Sizebutton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 5px;
  margin-top: 10px;
  outline: none;
  border: none;
  background-color: #b6b6b6;
  transition: background-color 0.3s;

  &:hover {
    background-color: teal;
    color: #fff;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
        background-color: teal;
        color: #fff;
    `}
`;

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
    {
      id: 1,
      name: "S",
    },
    {
      id: 2,
      name: "M",
    },
    {
      id: 3,
      name: "L",
    },
    {
      id: 4,
      name: "XL",
    },
    {
      id: 5,
      name: "XXL",
    },
  ];

  const id = location.pathname.split("/")[2];
  const [selectedItem, setSelectedItem] = useState(null);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  // const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await privateRequest.get(`/product/getProduct/${id}`);
        setProduct(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "incre") {
      setQuantity(quantity + 1);
    } else if (type === "dec") {
      quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
    }
  };

  const handleSizeButtonClick = (value) => {
    setSelectedItem(value);
    setProduct({ ...product, size: value });
  };

  const handleClick = async () => {
    // await dispatch(addProduct({ ...product, quantity }));
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
                <Button onClick={handleClick}>ADD TO CART</Button>
                <Button onClick={buyNow}>BUY NOW</Button>
              </ButtonContainer>
            </ProductImageAndButton>

            <InfoContainer>
              <ProductInfoContainer>
                <Title>{product.title}</Title>
                <PriceDetail>
                  <Price>
                    {" "}
                    <FaRupeeSign /> {product.price}
                  </Price>{" "}
                  <ActualPrice>
                    <FaRupeeSign />
                    {product.price + 200}
                  </ActualPrice>
                  <PercentDiscount>
                    {Math.floor(200 / ((product.price + 200) / 100))}% off
                  </PercentDiscount>{" "}
                </PriceDetail>
                <RatingReviewCOntainer>
                  <Rating>
                    <p style={{ marginRight: "5px " }}>4.5</p>
                    <FaStarHalfAlt style={{ fontSize: "12px" }} />
                  </Rating>
                  <p style={{ marginLeft: "5px", color: "gray" }}>
                    1647 Ratings, 459 Reviews
                  </p>
                </RatingReviewCOntainer>

                <p style={{ color: "gray" }}>Free Delevery</p>
              </ProductInfoContainer>
              <ProductInfoContainer>
                <Title>Select Size</Title>

                {sizeArr.map((item, index) => (
                  <Sizebutton
                    value={item.name}
                    key={index}
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
                <Disc>Fabric : Cooton</Disc>
                <Disc>Pattern : Solid</Disc>
                <Disc>Net Quantity : 1</Disc>
                <Disc>Country of Origin : India</Disc>
              </ProductInfoContainer>
              <ProductInfoContainer>
                <Title>Product Ratings & Reviews</Title>
                <RatingProgressbarContainer>
                  <RatingReview>
                    <RatingContainer>
                      <p style={{ marginRight: "5px", fontSize: "30px" }}>
                        4.5
                      </p>
                      <FaStar style={{ fontSize: "30px" }} />
                    </RatingContainer>

                    <p style={{ color: "gray" }}>1647 Ratings, 459 Reviews</p>
                  </RatingReview>
                  <RatingReviewsbar>
                    <div>
                      <Label>Excellent</Label>
                      <CustomLinearProgress
                        variant="determinate"
                        value={68}
                      />
                    </div>
                    <div>
                      <Label>Very Good</Label>
                      <CustomLinearProgress
                        variant="determinate"
                        value={60}
                      />
                    </div>
                    <div>
                      <Label>Good</Label>
                      <CustomLinearProgress
                        variant="determinate"
                        value={50}
                      />
                    </div>
                    <div>
                      <Label>Average</Label>
                      <CustomLinearProgress
                        variant="determinate"
                        value={25}
                      />
                    </div>
                    <div>
                      <Label>Poor</Label>
                      <CustomLinearProgress
                        variant="determinate"
                        value={30}
                      />
                    </div>
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
