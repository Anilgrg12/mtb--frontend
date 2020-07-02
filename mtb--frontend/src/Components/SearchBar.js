import React from 'react'

const SearchBar = (props) => {
    const {searchHandler,searchTerm,handleSortBy}= props
    return (
        <div className = "search">
        Search: <input type = "text" placeholder = "Enter trail name" onChange = {searchHandler} value = {searchTerm} /> 
        {/* <select onChange={handleSortBy} >
        <option value="default">Sort By</option>
        <option value="name">Name</option>
        <option value="difficulty">Difficulty</option>
      </select> */}
        </div>
    )
}
export default SearchBar