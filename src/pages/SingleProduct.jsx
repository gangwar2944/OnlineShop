import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';
import { privateRequest, publicRequest } from '../requestMethods';
import { addProducts } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`
   
`
const Wrapper = styled.div`
    margin-top: 60px;
    display: flex;
    background-color: aliceblue;
    ${mobile({ flexDirection: "column" })}
`
const ImgContainer = styled.div`
    flex: 1;
    max-width: 500px;
    display: grid;
    place-items: center;
`
const Image = styled.img`
   width: 100%;
`
const InfoContainer = styled.div`
   flex: 1;
   padding: 30px;
`
const Title = styled.h1`
   margin-bottom:10px ;
`
const Disc = styled.p`
   letter-spacing: 1px;
   font-size: 18px;
`
const Price = styled.h3`
   font-size: 50px;
   font-weight: 700;
   margin: 10px 0;
`
const FiterContainer = styled.div`
     display: flex;
     justify-content: space-between;
     margin: 10px 0;
     width: 50%;
     ${mobile({ width: "100%" })}
`
const Filter = styled.div`
    flex: 1;   
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
     width: 20px;
     height: 20px;
     border-radius: 50%;
     background-color: ${props => props.color};
     margin: 0 5px;
     cursor: pointer;
`
const FilterSize = styled.select`
    flex: 1;
    padding: 10px;
    margin-left:10px ;
    display: flex;
    align-items: center;
    cursor: pointer;
    
`
const FilterSizeOption = styled.option`
   
`
const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center ;
    justify-content: space-between;
    margin: 20px 0;
    ${mobile({ width: "100%" })}
`
const AmountContainer = styled.div`
    display: flex;  
    font-weight: 700;
    align-items: center ;
`
const Remove = styled.div`
    font-size: 20px;
    cursor: pointer;
`
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
`
const Add = styled.div`
    font-size: 20px;
    cursor: pointer;
`
const Button = styled.button`
    border: 1px solid teal;
    color: teal;
    background-color: transparent;
    padding: 10px;
    cursor: pointer;
&:hover{
    background-color: teal;
    border: none;
    color: #fff;
}
`
const SingleProduct = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product, setProduct] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [color,setColor] = useState(null);
    const [size,setSize] = useState(null);
    const dispatch = useDispatch()
    
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await privateRequest.get(`http://localhost:8080/api/v1/product/getAll/${id}`);
        
                setProduct(res.data.data)
                
               }catch(err){
                    console.log(err)
                }
            }
          getProduct();
        },[id])
       const handleQuantity =(type) =>{
            if(type==="incre"){
               setQuantity(quantity+1)
            }else if(type==="dec"){
                (quantity===1) ? setQuantity(1): setQuantity(quantity-1);
            }
        }
        console.log(product);
       const handleClick=()=>{
        dispatch(addProducts({...product,quantity,color,size}))         
       }
      
    return (
        <>
            <Container >
                <Navbar/>
                <Wrapper >
                    <ImgContainer>
                        <Image src={product.image} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Disc>{product.description}</Disc>
                        <Price> $ {product.price}</Price>
                        <FiterContainer>
                            <Filter>
                                <FilterTitle>Color  : {product.color}</FilterTitle>
                                {/* {product.color.map((c)=>(
                                    <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                                ))} */}
                            </Filter>
                            <Filter>
                                <FilterTitle>Size</FilterTitle>
                                <FilterSize onChange={(e)=>setSize(e.target.value)}>
                                {/* {product.size?.map((s)=>(
                                     <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))} */}
                                </FilterSize>
                            </Filter>
                        </FiterContainer>
                        <AddContainer >
                            <AmountContainer >
                                <Remove onClick={()=>handleQuantity("dec")}>-</Remove>
                                <Amount>{quantity}</Amount>
                                <Add onClick={()=>handleQuantity("incre")}>+</Add>
                            </AmountContainer>
                            <Button onClick={handleClick}>ADD TO CART</Button>
                        </AddContainer>
                    </InfoContainer>
                </Wrapper>
                <Newsletter/>
                <Footer/>
            </Container>
        </>
    )
}

export default SingleProduct;