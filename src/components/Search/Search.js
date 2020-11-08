import React from 'react';
import image1 from '../../Coffee-jon-tyson.jpeg'
import './Search.scss';
const Search = () => { 
  return ( 
    <>
    <div className="search-wrapper">
      <div className="container">
        <img src={image1} alt="" className='random-gif'/>
      </div>
    </div>
    </>
  )
}
export default Search;