import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive';
import { privateRequest } from '../requestMethods';


const Container = styled.div`
     width: 98vw;
    margin: 1vw;
    background-color: aliceblue;
`
const CategoryContainer = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({flexDirection:"column"})}
`

const Categories = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
          const getCategories= async ()=> {
                try{
                let res = await privateRequest.get("/category/getAll");
                setCategories(res.data);
                }catch(error){
                 console.log(error);
                }
          }
          getCategories();
    },[])
    return (
        <>
            <Container>
                <CategoryContainer>
                    {categories.map((item) => (
                        <CategoryItem item={item} key={item.id} />
                    ))}
                </CategoryContainer>

            </Container>

        </>
    )
}

export default Categories