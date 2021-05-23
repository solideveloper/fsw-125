import React from 'react';

// const Search = () => {
//      return <div> Hi World</div>
// }

const SearchBar = () => (
     <form action="/" method="get">
        <label htmlFor="header-search">
            <div className="visually-hidden">Search Bounty By Type: </div>
        </label>
        <input
            type="text"
            _id="uuid"
            placeholder="Jedi or Sith?"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);
export default SearchBar;

