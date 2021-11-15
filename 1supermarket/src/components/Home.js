import React from 'react'
import Header from './Header'
import Navigation  from './Navigation'
import MainSlider from './MainSlider'
import TopBrands from './TopBrands'
import Carousel from './Carousel'
import BannerBottom from './BannerBottom'
import Brands from './Brands'
import NewProducts from './NewProducts'
import Footer from './Footer'

function Home() {
    return (
        <div>
            <Header/>
            <Navigation />
            <MainSlider />
            <TopBrands />
            <Carousel />
            <BannerBottom />
            <Brands />
            <NewProducts />
            <Footer />
        </div>
    )
}

export default Home
