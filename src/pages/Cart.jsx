import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { GrAdd } from "react-icons/gr";
import { MdFormatSize, MdRemove } from "react-icons/md";
import { mobile } from '../responsive';
import { useSelector, useDispatch } from 'react-redux';
import StripeCheckout from "react-stripe-checkout"
import { useEffect, useState } from 'react';
import { publicRequest, userRequest } from "../requestMethods"
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai"
import { delProducts } from '../redux/cartRedux';


const KEY = process.env.REACT_APP_STRIPE;
// const KEY = "pk_test_51LCnnkSEzXF0AhfQiwUzzMSooZQ82fpw9QCCR84ZjfmWZBoUqPao0uqumjRlTxagDFT2KdU3vWAYGwcgL496S6Z100i3aRLrI0";

const Container = styled.div`
    
`
const Wrapper = styled.div`
    margin-top: 60px;
    
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    ${mobile({ justifyContent: "space-around" })}
    
`
const Title = styled.h1`
    text-align: center;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`
const TopText = styled.span`
    text-decoration: underline;
    margin:0 10px;
    cursor: pointer;
`
const Buttom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
    flex: 3;
    ${mobile({ marginBottom: "10px" })}
`
const Hr = styled.hr`
    color: grey;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column", margin: "10px" })}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
  
   display: flex;
   flex-wrap: wrap;
   overflow: hidden;
    
`
const ProductColorContainer = styled.div`
    display: flex;
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props => props.color};
    margin-right: 10px;

`
const ProductSize = styled.span`
    
`
const PriceDetail = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`


const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 600;
   margin-bottom: 15px;
`
const ProductRemove = styled.div`
    margin-bottom:15px;
`

const ProductAmount = styled.div`
   font-size: 24px;
   padding: 10px;
`
const ProductPrice = styled.div`
   font-size: 30px;
   font-weight: 700;
`
const Summary = styled.div`
    flex: 1;
   border: 0.5px solid lightgray;
   border-radius: 10px;
   padding: 20px;
   height: 60vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
   
`
const SummaryItem = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "700"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
    
   
`
const SummaryItemPrice = styled.span`
    
   
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #000;
    color: #fff;  
`
const EmptyContainer = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Empty = styled.div`
    padding: 20px;
`
const Heading = styled.h3`
    margin: 20px;
`
const Small= styled.small`
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate();
    const onToken = (token) => {
        setStripeToken(token);
    }
    //  console.log(cart)
    useEffect(() => {
        const makeRequest = async (req, res) => {
            try {
                const res = await userRequest.post("http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: cart.total * 100,

                    });
                navigate("/success", { data: res.data })
            } catch { }
        }
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate])

    const delItem = (product) => {
        dispatch(delProducts(product))
        // console.log(res.data)
    }



    return (
        <>
            <Container>
                <Navbar />
                {(cart.quantity > 0 )? <Wrapper>
                    <Title>Your Bag</Title>
                    <Top>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Your WishList(0)</TopText>
                        </TopTexts>
                        <TopButton type='filled'>CHECKOUT</TopButton>
                    </Top>
                    <Buttom>
                        <Info>
                            {cart.products?.map((product) => (
                                <Product key={product._id}>
                                    <ProductDetail>
                                        <Image src={product.img}></Image>
                                        <Details>
                                            <ProductName> <b>Prodcut : </b>{product.title}</ProductName>
                                            <ProductId> <b>ID:</b> {product._id.slice(10)}</ProductId>
                                            <ProductColorContainer>
                                                <b>Color: </b> <ProductColor color={product.color} />

                                            </ProductColorContainer>
                                            <ProductSize> <b>Size : </b>{product.size}</ProductSize>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                            <GrAdd />
                                            <ProductAmount>{product.quantity}</ProductAmount>
                                            <MdRemove />
                                        </ProductAmountContainer>
                                        <ProductRemove style={{ position: "relative" }}>
                                            <b>Remove:</b>
                                            <AiFillDelete
                                                onClick={() => delItem(product)}
                                                style={{ position: "absolute", bottom: "2px", margin: "0 5px", fontSize: "18px" }} />
                                        </ProductRemove>
                                        <ProductPrice>
                                            $ {product.price * product.quantity}
                                        </ProductPrice>
                                    </PriceDetail>
                                </Product>

                            ))}
                            <hr />
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY </SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>SubTotal</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimate Shipping</SummaryItemText>
                                <SummaryItemPrice>$ 5</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>$ -5</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText >Total</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <StripeCheckout
                                name='v-shop'
                                image="https://m.media-amazon.com/images/I/61-jBuhtgZL._UX569_.jpg"
                                billingAddress
                                shippingAddress
                                description={`your total is $ ${cart.total}`}
                                amount={cart.total * 100}
                                token={onToken}
                                stripeKey={KEY}
                            >
                                <Button>CHECKOUT NOW</Button>
                            </StripeCheckout>

                        </Summary>
                    </Buttom>
                </Wrapper> :

                    <>
                        <EmptyContainer>
                            <Empty>
                                <Image src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"/>
                                <Heading>Your cart is Empty</Heading>
                                 <Small>Add items to it now.</Small>
                                <Link to="/"> <Button>Start Shopping</Button></Link>
                            </Empty>
                        </EmptyContainer>

                    </>
                    }
                <Footer />
            </Container>
        </>
    )
}

export default Cart;