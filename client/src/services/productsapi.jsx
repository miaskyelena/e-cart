import React, { useState, useEffect } from 'react'
const productsUrl ='https://fakestoreapi.com/products/'

const getAllProducts = async () => {
    const response = await fetch(productsUrl)
    const data = await response.json()
    return data
    }
const getSingleProduct = async (id) => {
    const response = await fetch(productsUrl + id)
    const data = await response.json()
    return data
}
const getProductsByCategory = async (category) => {
    const response = await fetch(productsUrl + category)
    const data = await response.json()
    return data
}
const getProductsByPrice = async (price) => {
    const response = await fetch(productsUrl + price)
    const data = await response.json()
    return data
}
const getProductsByRating = async (rating) => {
    const response = await fetch(productsUrl + rating)
    const data = await response.json()
    return data
}
const getProductsByTitle = async (title) => {
    const response = await fetch(productsUrl + title)
    const data = await response.json()
    return data
}
const getProductsByDescription = async (description) => {
    const response = await fetch(productsUrl + description)
    const data = await response.json()
    return data
}
const getProductsByImage = async (image) => {
    const response = await fetch(productsUrl + image)
    const data = await response.json()
    return data
}


export default {
    getAllProducts,
    getSingleProduct,
    getProductsByCategory,
    getProductsByPrice,
    getProductsByRating,
    getProductsByTitle,
    getProductsByDescription,
    getProductsByImage
}


