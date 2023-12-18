import React, {useEffect, useState}from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import SearchBar from '../../components/bar/searchbar/SearchBar.jsx'
const EditProduct = () => {
    const [loading, setLoading] = useState(true)
    const [liked, setLiked] = useState(false)
    const { id } = useParams()
    const [product, setProduct] = useState({
        id: 0,
        title: '',
        size: '',
        color: '',
        condition: '',
        category: '',
        price: '',
        image: '',
        description: '',
        submittedBy: ' ',
    
    })

    useEffect(() => {
        const fetchProductById = async () => {
            const response = await fetch(`http://localhost:3001/products/${id}`)
            const data = await response.json()
            setProduct(data)
        }
        fetchProductById()
    }
    , [id])

    const handleChange = (event) => {
        const { name, value } = event.target;

        setProduct( (prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const updateProduct = (event) => {
        event.preventDefault()

        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        }

        fetch (`http://localhost:3001/products/${id}`, options)
        window.location = '/'
    }

    const deleteProduct = (event) => {
        event.preventDefault()

        const options = {
            method: 'DELETE',
        }

        fetch (`http://localhost:3001/products/${id}`, options)
        window.location = '/'
    }

  return (
    <>
    <SearchBar />
    <form >
    <Container className='view-listing mt-5 ' fluid>
        <Link to=
        {`/products/${id}`}
            className='text-muted ps-5'>Back to listing</Link>
        <h3 className='ps-5 mt-2'>Edit Listing</h3>
        <Row>
            <Col className='mt-5 w-50'xs={6} sm={4} md={6} lg={8} xl={8}>
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
                </Card>
            </Col>
            <Col className='mx-auto ms-5 me-5' xs={12} sm={10} md={4} lg={4} xl={4}>   
            <h5 className='text-dark'>Title</h5>
                <div className='d-flex justify-content-between'>
                    <h3 
                    style={{ fontWeight: 'bold', }}>
                        <input
                        className='form-control' 
                        name='title'
                        id='title'
                        type='text' 
                        placeholder={product.title} 
                        value={product.title} 
                        onChange={handleChange}/>
                    </h3>
                </div>
                <br />
                <h5 className='text-dark'>Size & Color</h5>
                <div className='d-flex justify-content-between'>
                <select
                className='form-control'
                name='size'
                id='size'
                value={product.size}
                onChange={handleChange}
                >
                    <option value=''>Select a size</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='X-Large'>X-Large</option>
                    <option value='OS'>One Size</option>
                </select> 
                &nbsp;
                <select
                className='form-control'
                name='color'
                id='color'
                value={product.color}
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
                value={product.condition}
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
                    <p className='small text-muted'>Required</p>
                </div>
                <select
                className='form-control'
                name='category'
                id='category'
                value={product.category}
                onChange={handleChange}
                required>
                    <option value=''>Select a category</option>
                    <option value='Tops'>Tops</option>
                    <option value='Bottoms'>Bottoms</option>
                    <option value='Shoes'>Shoes</option>
                    <option value='Accessories'>Accessories</option>
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
                     placeholder={product.price} 
                     value={product.price}
                     onChange={handleChange} /></h5>
                    <p className='small text-muted'>+ Shipping</p>
                </div>
                <br />
                <h5 className='text-dark'>Description</h5>
                <p className='small text-muted'>
                    <textarea className='form-control' rows='5' 
                    name='description'
                    id='description'
                    value={product.description}
                    onChange={handleChange}
                    required
                    />
                </p>
                <div className='d-flex justify-content-between'>
                    <input className='form-control' type='text' name='submittedby' id='submittedby' placeholder='Seller' /> &nbsp;
                    <input className='form-control' type='text' name='submittedon' id='submittedon'  />
                </div>

                <div className='d-flex justify-content-between mt-5'>
                    <Button variant='outline-primary' className='w-100' onClick={updateProduct}>Update</Button>&nbsp;
                    <Button variant='outline-danger' className='w-100' onClick={deleteProduct}>Delete</Button>
                </div>
            </Col>
        </Row>
    </Container>
    </form>
    </>
  )
}

export default EditProduct