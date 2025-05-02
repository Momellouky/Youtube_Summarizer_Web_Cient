import React from 'react'
import '../../Styles/SearchBar.css' 

export default function SearchBar() {
  return (
    <>
    
        <div className="search-bar-container">
            <div className="search-bar">
                <input type="text" placeholder="Search By Keyword" />
                <button id='search-btn'>Search</button>
            </div>
        </div>
    
    </>
  )
}
