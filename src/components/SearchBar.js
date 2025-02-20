import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) { 

  //Create a state variable called searchText and set it to an empty string
  //This variable stores the text the user types
  const [searchText, setSearchText] = useState(''); 

  //handleChange is called every time the suer types in the search bar
  //It updates the state with the new input value
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  //handleKeyPress is called when the user presses a key and the input field is focused
  //It checklks if the key pressed is 'Enter' and makes sure that the input isnt empty or empty spaces
  //If both conditions are true, it calls the onSearch function passed from the parent component with the current searchText as an argument
  const handleKeyPress = (e) => {
    if (e.key == 'Enter' && searchText.trim() !== '') {
      onSearch(searchText);
    }
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
          onKeyDown={handleKeyPress}
        />

        <img src="/images/search.svg" alt="search icon" className="search-icon" />
      </div>
    </div>
  );
}

export default SearchBar;
