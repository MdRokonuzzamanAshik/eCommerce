import React from 'react'

const Search = ({className,searchText}) => {
  return (
    <div className={`${className}`}>
        {searchText}
      <input
        type="text"
        placeholder="Search Products"
      />
    </div>
  )
}

export default Search
