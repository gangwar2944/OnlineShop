import React from 'react'
import Announcement from '../commonComponents/Announcement'
import Categories from './category/Categories'
import Footer from '../commonComponents/Footer'
import Navbar from '../commonComponents/Navbar'
import Newsletter from '../commonComponents/Newsletter'
import Products from './product/Products'
import Slider from '../commonComponents/Slider'

const Home = () => {
  return (
    <>
       <Announcement/>
       <Navbar/>
       <Slider/>
       <Categories/>
       <Products/>
       <Newsletter/>
       <Footer/>
    </>
  )
}

export default Home