import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import ItemCard from '../ProductCard/ItemCard'
import './ItemView.css'

const ItemLiked = () => {
    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
        const data = await response.json()
        setAllItems(data)
        }
        fetchProducts()
    }
    , [])

  return (
    <>
        <div className='container-fluid ps-5 pe-5'>
            <Row>
                <Col className='mb-4'>
                  <h4 className='text-left'
                    style={{
                        fontFamily: 'Arial',
                    }}
                    >Your Watched Items
                  </h4>
                  <span className='text-muted'>
                   Explore the products you like and add them to your cart.
                  </span>

                </Col>
            </Row>
            <Row
            className='d-flex justify-content-center w-100 h-100' 
            >
                <Col>
                    <OwlCarousel className='owl-theme' loop margin={10} 
                    responsive={{
                        0: {
                            items: 1,
                        },
                        600: {
                            items: 3,
                        },
                        1000: {
                            items: 5,
                        },
                    }}
                    >
                        {allItems.map((item) => (
                            <ItemCard 
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            category={item.category}
                            />
                        ))}
                    </OwlCarousel>
                </Col>
            </Row>
        </div>
        
    </>


  )
}

export default ItemLiked;