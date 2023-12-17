import React, {useEffect, useState}from 'react';
import OwlCarousel from 'react-owl-carousel';
import Card from '../Card/Card';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const CardCarousel = ({ data, title, subtitle }) => {

    return (
        <div className='carousel-container'>
            <div className='container-fluid ps-5 pe-5'>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='text-left'
                        style={{
                            fontFamily: 'Arial',
                            fontWeight: 'bold',
                        }}
                        >{title}</h2>
                        <p className='text-left'
                        style={{
                            fontFamily: 'Arial',
                        }}
                        >{subtitle}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
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
                            {data.map((item, index) => (
                                <Card
                                id={item.id}
                                key={index}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                category={item.category}
                                size={item.size}
                                submittedBy={item.submittedby}
                                condition={item.condition}
                                color={item.color}
                                submittedOn={item.submittedOn}
                                likes={item.likes}
                                />
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardCarousel; 