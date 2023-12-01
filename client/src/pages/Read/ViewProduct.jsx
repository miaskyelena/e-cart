import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { AiFillHeart, AiOutlineHeart, AiOutlineForm } from 'react-icons/ai'
import ProductsApi from '../../services/ProductsApi'
import SearchBar from '../../components/bar/Searchbar/SearchBar'
import './ViewProduct.css'
const ViewProduct = () => {
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
    <Container className='view-listing mt-5' fluid>
                        <Link to='/' className='text-muted ps-5'>Back to Home</Link>
        <Row className='mt-5'>
            <Col className='mt-5 w-50 mb-5'
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
                    }
                }>
                    <Card.Img variant='top' src={product.image} style={
                        {
                            width: '100%',
                            height: '600px',
                            objectFit: 'contain',
                        }
                    
                    } />
                </Card>
            </Col>
            <Col className='me-5 ms-5 ps-1 pe-1'
            xs={12}
            sm={10}
            md={4}
            lg={4}
            xl={4}
            >
                <div className='d-flex justify-content-between'>
                    <h3 
                    style={
                        {
                            fontWeight: 'bold',
                        }
                    }

                    >{product.title}</h3>
                    { liked ?
                    <AiFillHeart size={30} color='red' onClick={() => setLiked(false)} />
                    :
                    <AiOutlineHeart size={30} onClick={() => setLiked(true)} />
                    }

                </div>
                <div className='d-flex justify-content-between'>
                    
                    <p className='small'><a href='' className='text-muted'>
                        In {product.category}
                        </a></p>
                    <p className='small text-muted'>In Stock</p>
                </div>
                <div className='d-flex justify-content-between mb-3'>
                    <div style={
                        {
                            width: '50px',
                            height: '50px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#000',
                        }
                    }>
                        {rating.rate}
                        <span style={{
                            fontSize: '12px',
                            fontWeight: 'normal',
                        }}>/5</span>
                    </div>
                    <p className='small text-muted'>See {rating.count} ratings</p>
                </div>
                <br />
                <div className='d-flex justify-content-between'>
                    <h4 className='text-dark' style={
                        {
                            fontFamily: 'Arial',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                        }
                    }>${product.price} </h4>
                    <p className='small text-muted'>+ Shipping</p>
                </div>
                <br />
                <h5 className='text-dark'>Description</h5>
                <p className='small text-muted'>{product.description}</p>
            
                
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
                    <Button variant='dark' className='w-50'>Add to Cart</Button>
                    &nbsp;
                    <Link to={`/edit/${id}`} className='w-50'>
                        <Button variant='outline-primary' className='w-100'>
                            <AiOutlineForm size={20} />
                            &nbsp;
                            Edit
                        </Button>
                    </Link>
                </div>
            
            </Col>
        </Row>

    </Container>
    </>

  )
}

export default ViewProduct;