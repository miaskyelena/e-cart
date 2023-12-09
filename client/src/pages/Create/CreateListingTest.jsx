import React, { useState } from 'react'
import './CreateListingTest.css'
const CreateListingTest = ({ api_url }) => {
    const [newProduct, setNewProduct] = useState({
        id: 0,
        title: '',
        size: '',
        color: '',
        condition: '',
        category: '',
        price: 0.0,
        image: '',
        description: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target; 
        setNewProduct( (prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
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
        window.location.href = '/'
    }

  return (
    <div className='create'>
        <form> 
            <label htmlFor='title'>Title</label>
            <input
                type='text'
                name='title'
                id='title'
                value={newProduct.title}
                onChange={handleChange}
            />
            <label htmlFor='size'>Size</label>
            <input
                type='text'
                name='size'
                id='size'
                value={newProduct.size}
                onChange={handleChange}
            />
            <label htmlFor='color'>Color</label>
            <input
                type='text'
                name='color'
                id='color'
                value={newProduct.color}
                onChange={handleChange}
            />
            <label htmlFor='condition'>Condition</label>
            <input
                type='text'
                name='condition'
                id='condition'
                value={newProduct.condition}
                onChange={handleChange}
            />
            <label htmlFor='category'>Category</label>
            <input
                type='text'
                name='category'
                id='category'
                value={newProduct.category}
                onChange={handleChange}
            />
            <label htmlFor='price'>Price</label>
            <input
                type='text'
                name='price'
                id='price'
                value={newProduct.price}
                onChange={handleChange}
            />
            <label htmlFor='image'>Image</label>
            <input
                type='text'
                name='image'
                id='image'
                value={newProduct.image}
                onChange={handleChange}
            />
            <label htmlFor='description'>Description</label>
            <input
                type='text'
                name='description'
                id='description'
                value={newProduct.description}
                onChange={handleChange}
            />
            <input type='submit' value='Submit' onClick={createProduct} />
        </form>
      
    </div>
  )
}

export default CreateListingTest
