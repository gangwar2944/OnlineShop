import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import { useSelector, useDispatch } from 'react-redux';
import StripeCheckout from "react-stripe-checkout"
import { useEffect, useState } from 'react';
import { imageUrl, privateRequest, userRequest } from "../requestMethods"
import { Link, useNavigate } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai"
import { addProducts, delProducts } from '../redux/cartRedux';
import CheckOut from '../Checkout/CheckOut';
import CartItem from '../components/CartItem';

const KEY = process.env.REACT_APP_STRIPE;

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
        width: 70%;
    margin: auto;
    ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
    flex: 3;
    ${mobile({ marginBottom: "10px" })}
`
const Hr = styled.hr`
    color: grey;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 150px;
    max-height: 160px;
    flex: 1;
`
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: teal;
    color: #fff;  
    border: none;
    text-transform: uppercase;
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
const FooterContainer = styled.div`
    /* width: 70%; */
    background-color: antiquewhite;
    margin: auto;
`
const Cart = () => {
    const [cartData,setCartData] = useState({
        id:-1,
        products :[{}],
        quantity:0,
        total:0,
        userId:null,
    });
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const user=useSelector(state=>state.user.currentUser) 

    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate();
    const onToken = (token) => {
        setStripeToken(token);
    }
     console.log(cart)
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

    // useEffect(()=>{
              
    // },[])

    useEffect(()=>{
       
          const getCartData = async ()=> {
                try{
                let res = await privateRequest.get(`/cart/getAllCart/${user.id}`);
                console.log(res.data.data)
                setCartData(res.data.data);
                // console.log("hii vishal")
                }catch(error){
                 console.log(error);
                }
          }
         
       console.log("cartData",cartData)
       if(cartData.quantity>0){
          cartData.products.forEach((itemData)=>{
            console.log(itemData)
            let quantity = cartData.quantity;
            dispatch(addProducts({...itemData,quantity}));
          })
       }
       
        //   dispatch(addProducts({...cartData.products}))   
        getCartData();
    },[])

    const redirectAddressPage=()=>{
        navigate("checkout?step=2");
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
                        {/* <TopButton type='filled'>CHECKOUT</TopButton> */}
                    </Top>
                    <Buttom>
                        <Info>
                            {cart.products?.map((product) => (
                                    <CartItem product={product}/>
                            ))}
                           <FooterContainer> <Button onClick={redirectAddressPage}>Place Order</Button></FooterContainer> 
                        </Info>
                      
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