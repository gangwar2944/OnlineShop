import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from "../components/Navbar"
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { mobile } from '../responsive';


const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 10px;
    margin-top: 60px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
`
const Filter = styled.div`
    margin: 10px;
    display: flex;
    ${mobile({flexDirection:"column"})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`
const Select = styled.select`
    margin-left: 10px;
    padding: 8px;
    ${mobile({margin:"10px 0 0 0"})}
    
`
const Option = styled.option`
    
`


const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters,setFilter] = useState({});
    const [sort,setSort] = useState("sort")
   
    console.log(cat)
    const handleFilters =(e)=>{
     const {name,value} = e.target;
       setFilter({...filters,[name]:value})

    }
    
        return (
        <>
            <Container>
                <Navbar />
                <Title> {cat} </Title>
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter1</FilterText> 
                        <Select name ="color" onChange={handleFilters}>
                            <Option disabled >color</Option>
                            <Option>white</Option>
                            <Option>black</Option>
                            <Option>yellow</Option>
                            <Option>green</Option>
                            <Option>red</Option>
                            <Option>blue</Option>
                            <Option>gray</Option>
                        </Select>
                        <Select name='size' onChange={handleFilters}>
                            <Option disabled >Size</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                            <Option>XXL</Option>                          
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Filter2</FilterText>
                        <Select onChange={(e)=>setSort(e.target.value)}>
                            <Option value="sort">Sort</Option>
                            <Option value="dec">Price(dec)</Option>
                            <Option value="incre">Price(asc)</Option>                                                    
                        </Select>
                    </Filter>
                 </FilterContainer>
                <Products cat={cat} filters={filters} sort={sort}/>
                <Newsletter />
                <Footer />
            </Container>

        </>
    )
}

export default ProductList