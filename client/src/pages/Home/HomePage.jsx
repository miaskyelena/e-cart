import React, {useEffect, useState} from 'react'
import BannerImage from '../../components/banner/BannerImage'
import SellerBanner from '../../components/banner/SellerBanner'
import SearchBar from '../../components/Bar/SearchBar/SearchBar'
import ProductCarousel from '../../components/Card/ProductCarousel/ProductCarousel'
import Footer from '../../components/footer/Footer'
import './HomePage.css'
const HomePage = ( sellingProducts ) => {


const [products, setProducts] = useState([])

useEffect(() => {
  setProducts(sellingProducts)
}
, [sellingProducts])

console.log(products)


  return (
    <>
      <SearchBar />
        <BannerImage />
        &nbsp;
        <ProductCarousel
        title='All products'
        subtitle='Products reccomended for you.'
        data={sellingProducts.allProducts}
       />
        <ProductCarousel
        title='Selling products'
        subtitle='Products you are currently selling.'
        data={sellingProducts.sellingProducts}
        />
        <SellerBanner />

      <Footer />
    </>
  )
}

export default HomePage