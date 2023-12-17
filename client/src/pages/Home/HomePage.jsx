import React, {useEffect, useState} from 'react'
import BannerImage from '../../components/banner/BannerImage'
import SellerBanner from '../../components/banner/SellerBanner'
import SearchBar from '../../components/Bar/SearchBar/SearchBar'
import CardCarousel from '../../components/Carousel/CardCarousel'
import Footer from '../../components/footer/Footer'
import FilterBar from '../../components/Bar/FilterBar/FilterBar'
import './HomePage.css'
import { Card } from 'react-bootstrap'
const HomePage = ( props ) => {


  return (
    <>
      <SearchBar />
      <FilterBar />
        <BannerImage />
        &nbsp;
        <CardCarousel
        title='All products'
        subtitle='Browse all products.'
        data={props.data}
        />
        <CardCarousel
        title='Popular products'
        subtitle='Explore the most popular products.'
        data={[...props.data].sort((a, b) => b.likes - a.likes).slice(0, 10)}
        />

      <Footer />
    </>
  )
}

export default HomePage