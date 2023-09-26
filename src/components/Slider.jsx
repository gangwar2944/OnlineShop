import React from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderData from './SliderData';
import styled  from 'styled-components';
import { miniMobile, mobile, tablate} from  "../responsive"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Container = styled.div`
    margin-top: 80px;
    width:98.5vw;
    height: 50vh;
    display: flex;
    background-color: #bfdada;
    position: relative;
    overflow-y: scroll;
    ${mobile({marginTop:"20px",height:"70vh"})};
    ${tablate({marginTop:"20px",height:"60vh"})};
    ${miniMobile({marginTop:"0px",height:"70vh"})};
`
const ImgContainer = styled.div`
    flex: 1;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%; 
    ${mobile({width:"80%",height:"50%"})};
`
const Image = styled.img`
     height: 100%;
     width: 100%;
     object-fit:cover;
     background-image: start;
     ${mobile({marginTop:"100px"})};
`
const InfoContainer = styled.div`
    width: 50%;
    flex: 1;
    padding: 50px;   
    ${mobile({width:"100%",height:"50%"})};
`
const Title = styled.h1`
    font-size: 45px;
    ${mobile({fontSize:"25px",margin:"10px"})};
`
const Disc = styled.p`
    margin: 20px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    text-align: justify;
    ${mobile({fontSize:"15px",marginTop:"0px"})};
`
const Button = styled.button`
    padding: 5px 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    ${mobile({fontSize:"15px",marginTop:"0px"})};
 &:hover{
    color: #fff;
    background-color: teal;
}
`
const Slider = () => {
  
    
    return (
        
         
      <Container>
        
    
          <Swiper 
                modules={[ Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
          >
            {
              sliderData.map((item,index)=>{
                return (
                    
                  <SwiperSlide key={index} style={{display:'flex',justifyContent:"center",alignItems:"center"}} className="slider">
                    
                    <ImgContainer>
                       <Image src={item.image} alt="" />
                    </ImgContainer>
                  <InfoContainer >
                     <Title>{item.name}</Title>
                     <Disc>
                        {item.disc}
                      </Disc>
                      <Button>SHOP NOW</Button>
                  </InfoContainer>
                  
                </SwiperSlide>
    
                )
              })
            }
    
          </Swiper>
          
          </Container>
      )
}

export default Slider;