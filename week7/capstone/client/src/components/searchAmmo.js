import React from 'react';



const SearchBar = () => (
     <form action="/" method="get">
        <label htmlFor="header-search">
            <div>
                <h2>Search Flavors By Bottle Type:</h2> 
            </div>
        </label>
        <ol><li>
        <input
            type="text"
            _id="uuid"
            placeholder="Glass or Plastic?"
            name="s" 
        />
        </li>
        </ol>
        <button type="submit">Search</button>
    </form>
);
export default SearchBar ;

