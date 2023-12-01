import React from 'react'
import BannerImage from '../../components/banner/BannerImage'
import ItemView from '../../components/card/ViewCard/ItemView'
import ItemLiked from '../../components/card/ViewCard/ItemLiked'
import ItemSelling from '../../components/card/ViewCard/ItemSelling'
import SellerBanner from '../../components/banner/SellerBanner'
import SearchBar from '../../components/Bar/SearchBar/SearchBar'
import CustomerReviews from '../../components/card/ViewCard/CustomerReviews'
import Footer from '../../components/footer/Footer'
import CategoriesBar from '../../components/bar/CategoriesBar/CategoriesBar'
import { Container, Row, Col } from 'react-bootstrap'
import './HomePage.css'
const HomePage = () => {

  return (
    <>
      <SearchBar />
        <BannerImage />
        <ItemView />
        <ItemLiked />
        <SellerBanner />
        <ItemSelling />
        <CustomerReviews />
      <Footer />
    </>
  )
}

export default HomePage