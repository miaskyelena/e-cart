import React from 'react'
import './SearchInput.css'
import { BiSearch } from 'react-icons/bi'
import SearchButton from './SearchButton'
const SearchInput = () => {
  return (
    <div className='search-input'>
        <input type='text' placeholder='Search for anything.' >
        </input>
        <BiSearch size={25} className='search-icon' style=
        {{position: 'relative', marginLeft: '-3rem'}}/>
      

    </div>
  )
}

export default SearchInput