import React, {useEffect, useState}from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../../Client.jsx'
import { Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import SearchBar from '../../components/bar/searchbar/SearchBar.jsx'
import ProductsApi from '../../services/ProductsApi.jsx'
import Images from '../../components/image/Images.jsx'
const EditListing = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [liked, setLiked] = useState(false)
    const [rating, setRating] = useState({
        rate: 0,
        count: 0,
    })
    const { id } = useParams()
    useEffect(() => {
        const fetchProduct = async () => {
            const product = await ProductsApi.getSingleProduct(id)
            setProduct(product)
            setLoading(false)
        }
        fetchProduct()
    }
    , [product])

    console.log(product)

    useEffect(() => {
        const fetchRating = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}/`)
            const data = await response.json()
            setRating(data.rating)
        }
        fetchRating()
    }
    , [rating])
    

  return (
    <>
    <SearchBar />
    <Form >
    <Container className='view-listing mt-5 ' fluid>
        <Link to=
        {`/products/${id}`}
            className='text-muted ps-5'>Back to listing</Link>
        <h3 className='ps-5 mt-2'>Edit Listing</h3>
        <Row>
            <Col className='mt-5 w-50'
             xs={6}
             sm={4}
             md={6}
             lg={8}
             xl={8}
            >
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
                    <Card.Img variant='top' src={product.image} style={
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
            <Col className='mx-auto ms-5 me-5'
            xs={12}
            sm={10}
            md={4}
            lg={4}
            xl={4}
            >   <h5 className='text-dark'>Title</h5>
                <div className='d-flex justify-content-between'>
                    <h3 
                    style={
                        {
                            fontWeight: 'bold',
                        }
                    }
                    >
                        <input className='form-control' type='text' placeholder={product.title} />
                    </h3>
                </div>
                <div className='d-flex justify-content-between'>
                    
                        <select className='form-select' aria-label='Default select example'>
                            <option selected>Category</option>
                            <option value='1'>Electronics</option>
                            <option value='2'>Clothing</option>
                            <option value='3'>Home</option>
                        </select>

                </div>
                
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
                    }><input className='form-control' type='text' placeholder={product.price} /></h5>

                    <p className='small text-muted'>+ Shipping</p>
                </div>
                <br />
                <h5 className='text-dark'>Description</h5>
                <p className='small text-muted'>
                    <textarea className='form-control' rows='5' 
                    placeholder={product.description}
                    />
                </p>
                <br />
                <h5 className='text-dark' style={
                    {
                        fontFamily: 'Arial',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                    }
                }>Shipping</h5>
                <p className='small text-muted'>Shipping Details</p>
                <hr />
                <h5 className='text-dark' style={
                    {
                        fontFamily: 'Arial',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                    }
                }>Seller</h5>
                <p className='small text-muted'>Seller Details</p>
                <div className='d-flex justify-content-between mt-5'>
                    <Button variant='outline-primary' className='w-100'>Update</Button>
                    &nbsp;
                </div>
            
            </Col>
        </Row>

    </Container>
    </Form>
    </>
  )
}

export default EditListing