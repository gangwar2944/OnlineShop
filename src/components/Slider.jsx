import React from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderData from './SliderData';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button as MuiButton } from '@mui/material';
import { miniMobile, mobile, tablet } from "../responsive";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Container = styled(Box)(({ theme }) => ({
    marginTop: '80px',
    width: '98.5vw',
    height: '50vh',
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflowY: 'scroll',
    [theme.breakpoints.down('mobile')]: {
        marginTop: '20px',
        height: '70vh',
    },
    [theme.breakpoints.down('tablet')]: {
        marginTop: '20px',
        height: '60vh',
    },
    [theme.breakpoints.down('miniMobile')]: {
        marginTop: '0px',
        height: '70vh',
    }
}));

const ImgContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('mobile')]: {
        width: '80%',
        height: '50%',
    },
}));

const Image = styled('img')(({ theme }) => ({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    backgroundImage: 'start',
    [theme.breakpoints.down('mobile')]: {
        marginTop: '100px',
    },
}));

const InfoContainer = styled(Box)(({ theme }) => ({
    width: '50%',
    flex: 1,
    padding: theme.spacing(6.25),
    [theme.breakpoints.down('mobile')]: {
        width: '100%',
        height: '50%',
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    fontSize: '45px',
    [theme.breakpoints.down('mobile')]: {
        fontSize: '25px',
        margin: theme.spacing(1.25),
    },
}));

const Disc = styled(Typography)(({ theme }) => ({
    margin: theme.spacing(2.5, 0),
    fontSize: '20px',
    fontWeight: 500,
    letterSpacing: '1px',
    textAlign: 'justify',
    [theme.breakpoints.down('mobile')]: {
        fontSize: '15px',
        marginTop: '0px',
    },
}));

const Button = styled(MuiButton)(({ theme }) => ({
    padding: theme.spacing(0.625, 1.25),
    fontSize: '20px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    [theme.breakpoints.down('mobile')]: {
        fontSize: '15px',
        marginTop: '0px',
    },
    '&:hover': {
        color: '#fff',
        backgroundColor: 'teal',
    },
}));

const Slider = () => {
    return (
        <Container>
            <Swiper
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {sliderData.map((item, index) => (
                    <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="slider">
                        <ImgContainer>
                            <Image src={item.image} alt="" />
                        </ImgContainer>
                        <InfoContainer>
                            <Title variant="h1">{item.name}</Title>
                            <Disc variant="body1">{item.disc}</Disc>
                            <Button variant="outlined">SHOP NOW</Button>
                        </InfoContainer>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}

export default Slider;
