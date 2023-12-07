import React, {useEffect, useState}from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { supabase } from '../../Client.jsx'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import SearchBar from '../../components/bar/SearchBar/SearchBar.jsx'
import ProductsApi from '../../services/ProductsApi.jsx'
import Images from '../../components/image/Images.jsx'

const CreateListing = ({ api_url }) => {
    const [newProduct, setNewProduct] = useState({
        title: '',
        size: '',
        color: '',
        condition: '',
        category: '',
        price: '',
        image: '',
        description: '',
    })


const handleChange = (event) => {
    const { name, value } = event.target
    setNewProduct( (prev) => {
        return {
            ...prev,
            [name]: value,
        }
    }
    )
}

const createProduct = async (event) => {
    event.preventDefault()

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
    }

    await fetch(`${api_url}/api/products`, options)
    .then(response => response.json())
    .catch(error => console.log(error))
}


  return (
    <>
    <SearchBar />
    <Container className='view-listing mt-5 ' fluid>
        <Link to=
        {`/`}
            className='text-muted ps-5'>Back to home</Link>
        <h3 className='ps-5 mt-2'>Create Listing</h3>
        <span className='text-muted ps-5'>
            Add a new listing to your store.
        </span>
        <Row>
            <Col className='mt-5 w-50' xs={6} sm={4} md={6} lg={8} xl={8}>
                <Card className='shadow-sm mx-auto' style={
                    {
                        width: '100%',
                        height: '100%',
                        borderRadius: '10px',
                        border: 'none',
                        overflow: 'hidden',
                        borderColor: 'black',
                    }
                }>  
                    <Card.Img variant='top' style={
                        {
                            width: '100%',
                            height: '600px',
                            objectFit: 'contain',
                            padding: '20px',
                            opacity: '0.5',                            
                        }
                    } />
                    <Images />
                </Card>
            </Col>
            <Col className='mx-auto ms-5 me-5' xs={12} sm={10} md={4} lg={4} xl={4}>
            <form className='create-product-form'>
                <h5 className='text-dark'>Title</h5>
                <input 
                className='form-control'
                type='text' 
                id='title'
                name='title'
                value={newProduct.title}
                placeholder='Title' 
                onChange={handleChange}
                required
                />
                <br />
                <div className='d-flex justify-content-between'>
                </div>
                <div className='d-flex justify-content-between'>
                <select
                className='form-control'
                name='size'
                id='size'
                value={newProduct.size}
                onChange={handleChange}
                >
                    <option value=''>Select a size</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='X-Large'>X-Large</option>
                </select> 
                &nbsp;
                <select
                className='form-control'
                name='color'
                id='color'
                value={newProduct.color}
                onChange={handleChange}
                required
                >
                    <option value=''>Select a color</option>
                    <option value='Red'>Red</option>
                    <option value='Orange'>Orange</option>
                    <option value='Yellow'>Yellow</option>
                    <option value='Green'>Green</option>
                    <option value='Blue'>Blue</option>
                    <option value='Purple'>Purple</option>
                    <option value='Pink'>Pink</option>
                    <option value='Brown'>Brown</option>
                    <option value='White'>White</option>
                    <option value='Black'>Black</option>
                    <option value='Gray'>Gray</option>
                    <option value='Multi'>Multi</option>
                </select>
                </div>
                <br />
                <div className='d-flex justify-content-between'>
                    <h5 className='text-dark'>Condition</h5>
                    <p className='small text-muted'>Required</p>
                </div>
                <select
                className='form-control'
                name='condition'
                id='condition'
                value={newProduct.condition}
                onChange={handleChange}
                required
                >
                    <option value=''>Select a condition</option>
                    <option value='Pristine'>Pristine</option>
                    <option value='New'>Like New</option>
                    <option value='Used'>Used</option>
                </select>
                <br />
                <div className='d-flex justify-content-between'>
                    <h5 className='text-dark'>Category</h5>
                    <p className='small text-muted'>Optional</p>
                </div>
                <select
                className='form-control'
                name='category'
                id='category'
                value={newProduct.category}
                onChange={handleChange}
                >
                    <option value=''>Select a category</option>
                    <option value='Clothing'>Clothing</option>
                    <option value='Shoes'>Shoes</option>
                    <option value='Accessories'>Accessories</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Home'>Home</option>
                    <option value='Toys'>Toys</option>
                    <option value='Other'>Other</option>
                </select>             
                <br />
                <div className='d-flex'>
                    <h5
                    style={
                        {
                            fontFamily: 'Arial',
                            fontSize: '1.2rem',
                            marginTop: '0.5rem',
                        }
                    }
                    >$</h5>&nbsp; <h5 className='text-dark' style={
                        {
                            fontFamily: 'Arial',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                        }
                    }><input 
                    className='form-control'
                    type='text'
                    name='price'
                    id='price'
                    value={newProduct.price}
                    placeholder='Price ' 
                    onChange={handleChange}
                    required
                    /></h5>

                    &nbsp; <p className='small text-muted'>+ Shipping</p>
                </div>
                <input 
                    className='form-control'
                    type='text' 
                    name='image'
                    id='image'
                    value={newProduct.image}
                    placeholder='Image url'
                    onChange={handleChange}
                    required
                     />
                <br />
                <h5 className='text-dark'>Description</h5>
                <p className='small text-muted'>
                    <textarea 
                    className='form-control'
                    type='text'
                    name='description'
                    id='description'
                    value={newProduct.description}
                    rows='5' 
                    placeholder='Describe your product below. Include all relevant information.'
                    onChange={handleChange}
                     />
                </p>
                <br />
            </form>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default CreateListing