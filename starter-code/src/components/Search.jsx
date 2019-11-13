import React from "react";

function Search({ handleSearch }) {
  return (
    <input
      type="text"
      placeholder="Search for your favorite food"
      className="input search-bar"
      onChange={handleSearch}
    />
  );
}
export default Search;
