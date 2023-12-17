import React, { useState } from 'react'

const CreateListingTest = ({api_url}) => {

    const [newProduct, setNewProduct] = useState({
        id: 0,
        title: '',
        size: '',
        color: '',
        condition: '',
        category: '',
        price: 0,
        image: '',
        description: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
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
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: newProduct.title,
                size: newProduct.size,
                color: newProduct.color,
                condition: newProduct.condition,
                category: newProduct.category,
                price: newProduct.price,
                image: newProduct.image,
                description: newProduct.description,
            })
        }

        await fetch(`${api_url}/api/products`, options)
        window.location.href = '/'
       
       
    
    }


  return (
    <div>
        <center><h3> Create New Product</h3></center>
        <form> 
            <label>Title</label><br/>
            <input type="text" id="title" name="title" value={newProduct.title} onChange={handleChange}/><br/>
            <br/>

            <label>Size</label><br/>
            <input type="text" id="size" name="size" value={newProduct.size} onChange={handleChange}/><br/>
            <br/>

            <label>Color</label><br/>
            <input type="text" id="color" name="color" value={newProduct.color} onChange={handleChange}/><br/>
            <br/>

            <label>Condition</label><br/>
            <input type="text" id="condition" name="condition" value={newProduct.condition} onChange={handleChange}/><br/>
            <br/>

            <label>Category</label><br/>
            <input type="text" id="category" name="category" value={newProduct.category} onChange={handleChange}/><br/>
            <br/>

            <label>Price</label><br/>
            <input type="number" id="price" name="price" value={newProduct.price} onChange={handleChange}/><br/>
            <br/>

            <label>Image</label><br/>
            <input type="text" id="image" name="image" value={newProduct.image} onChange={handleChange}/><br/>
            <br/>

            <label>Description</label><br/>
            <input type="text" id="description" name="description" value={newProduct.description} onChange={handleChange}/><br/>
            <br/>

            <input type="submit" value="Submit" onClick={createProduct}/>

        </form>
    </div>

   
  )
}

export default CreateListingTest
