import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'
import './SearchBar.css'
const SearchBar = () => {
  return (
    <Navbar className='search-bar'>
        <Navbar.Brand href='/' className='ms-5 brand-title'>eCart</Navbar.Brand>
        <Nav className=' search-bar-container me-2'>
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              categories
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Men's clothing</a></li>
              <li><a class="dropdown-item" href="#">Women's clothing</a></li>
              <li><a class="dropdown-item" href="#">Dresses & Skirts</a></li>
              <li><a class="dropdown-item" href="#">Jewelery</a></li>
              <li><a class="dropdown-item" href="#">Electronics</a></li>
              <li><a class="dropdown-item" href="#">Tops & Blouses</a></li>
              <li><a class="dropdown-item" href="#">Bags & Shoes</a></li>            
            </ul>
          </div>
          <SearchInput />
          <Nav.Link href='/products'>
            <AiOutlineHeart size={25}/>
          </Nav.Link>
          <Nav.Link href='/products'>
            <BiUserCircle size={25}/>
          </Nav.Link>
          <Nav.Link href='/'>
            <MdOutlineShoppingBag size={25}/>
          </Nav.Link>         
        </Nav>
    </Navbar>
  )
}

export default SearchBar