import React from 'react'
import { Link } from 'react-router-dom'
import './FilterBar.css'
const FilterBar = () => {
  return (
    <div className='filter-bar-container'>
        <div className='filter-bar-item'>
            <Link to='/products' className='filter-bar-button'>SHOP</Link>
        </div>
        <div className='filter-bar-item'>
            <Link to='/create' className='filter-bar-button'>SELL</Link>
        </div>
        <div className='filter-bar-item'>
            <Link to='/about' className='filter-bar-button'>ABOUT</Link>
        </div>
    </div>
  )
}

export default FilterBar