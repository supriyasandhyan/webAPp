import React from "react";
import "../Css/Fiction.css";
import { FaSearch } from "react-icons/fa";


const Search = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Search;
