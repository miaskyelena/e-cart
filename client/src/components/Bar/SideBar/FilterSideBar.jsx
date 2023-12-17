
import React from 'react';
import { FaFilter } from 'react-icons/fa';

const FilterSideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <FaFilter className="filter-icon" />
        <h2>Product Categories</h2>
      </div>
      <ul className="category-list">
        <li className="category-item">Category 1</li>
        <li className="category-item">Category 2</li>
        <li className="category-item">Category 3</li>
        {/* Add more category items here */}
      </ul>
    </div>
  );
};

export default FilterSideBar;
