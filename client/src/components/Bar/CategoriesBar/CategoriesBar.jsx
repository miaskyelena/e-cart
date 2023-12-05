import React from 'react'
import './CategoriesBar.css'
import { Button, Navbar, Row, Col} from 'react-bootstrap'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
const CategoriesBar= () => {
    const categories = [
      ['Pet & Home'],
        ['Outdoor'],
        ['Clothing & Apparel'],
        ['Electronics'],
        ['Sports & Fitness'],
        ['Beauty & Personal Care'],
        ['Toys & Games'],
        ['Books'],
        ['Handmade'],
        ['Other']
    ]

    return (
        <div className='categories-bar'>
            <div className='categories-container ms-5 mx-auto'>
            {categories.map((category, index) => (
                <div key={index} className='category me-2 '>
                    <Button variant='link' className='category-button'>
                        {category}
                    </Button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default CategoriesBar

  