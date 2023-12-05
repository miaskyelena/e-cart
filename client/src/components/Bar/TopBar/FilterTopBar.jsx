import React, { useState } from 'react';
import './FilterTopBar.css';

const FilterTopBar = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  return (
    <div className="filter-bar">
        <div className="filter-bar-container">
            <button onClick={() => setSelectedFilter('filter1')}>Dresses & Skirts</button>
            <button onClick={() => setSelectedFilter('filter2')}>Electronics</button>
            <button onClick={() => setSelectedFilter('filter3')}>Tops & Blouses</button>
            <button onClick={() => setSelectedFilter('filter4')}>Bags & Shoes</button>
            <button onClick={() => selectedFilter('filter5')}>Jewlery</button>
            <button onClick={() => selectedFilter('filter5')}>Jewlery</button>
            <button onClick={() => selectedFilter('filter5')}>Jewlery</button>

        </div>
    </div>
  );
}

export default FilterTopBar;