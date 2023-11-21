import React from 'react'
import BannerPhoto from '../../assets/images/banner-image-16.jpg'
import BannerPhoto2 from '../../assets/images/banner-image-15.jpg'
import BannerPhoto3 from '../../assets/images/banner-image-19.jpg'
import BannerPhoto4 from '../../assets/images/banner-image-4.jpg'
import BannerPhoto5 from '../../assets/images/banner-image-11.jpg'
import BannerPhoto6 from '../../assets/images/banner-image-1.jpg'
import { Button } from 'react-bootstrap'
import './BannerImage.css'
const BannerImage = () => {
  return (
    <>
   <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner banner-container">
    <div class="carousel-item">
      <img src={BannerPhoto} class="banner-image" alt="..."/>
    </div>
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={BannerPhoto6} class="banner-image" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={BannerPhoto2} class="banner-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={BannerPhoto3} class="banner-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={BannerPhoto4} class="banner-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={BannerPhoto5} class="banner-image" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <div className='banner-overlay'>
    <span className='banner-text'>Welcome to eCart,</span>
    <h1 className='banner-text'>Buy, sell, and shop for anything.</h1><br/>
    <span className='banner-text'>
      Shop trending fashions, pet supplies, electronics, home goods, and more.
    </span>
    &nbsp;
    <div className='banner-button-container'>
      <Button variant='success' className='ms-4 sell-button'>Shop now</Button>
    </div>
  </div>

    </div>
    </>
  )
}

export default BannerImage