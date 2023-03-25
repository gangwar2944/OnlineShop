import React from 'react'
import styled from "styled-components";
import CategoryItem from './CategoryItem'
import { categories } from "../data";
import { mobile } from '../responsive';


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