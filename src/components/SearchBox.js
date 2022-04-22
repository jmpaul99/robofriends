import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input 
            type='search' 
            placeholder="Type to Search"
            onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;