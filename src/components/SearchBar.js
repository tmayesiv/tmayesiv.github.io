import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [searchText, setSearchText] = useState(''); //Create a state variable called searchText, which keeps track of what the user types in the search bar

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-inner">
        <input
          className="search-input"
          type="text"
          placeholder="Search location"
          value={searchText}
          onChange={handleChange}
        />

        <img src="/images/search.svg" alt="search icon" className="search-icon" />
      </div>
    </div>
  );
}

export default SearchBar;
