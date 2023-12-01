import React from 'react'
import './FilterSideBar.css'

const FilterSideBar = () => {
    return (
        <div className='filter-sidebar-container'>
        <div className='row'>
            <div className='col'>
            <h4 className='filter-sidebar-title'>Filter by</h4>
            <span className='filter-sidebar-text'>Price</span><br />
            <span className='filter-sidebar-text'>Category</span><br />
            <span className='filter-sidebar-text'>Brand</span><br />
            <span className='filter-sidebar-text'>Color</span><br />
            </div>
        </div>
        </div>
    )
}

export default FilterSideBar
  