import { useState } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchHandler = (e) => {
    e.preventDefault();

    console.log("searching for term: " + searchTerm);
  };

  return (
    <div className="search">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search TV Show ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button className="btn btn-block" onClick={onSearchHandler}>
          <MagnifyingGlassIcon className="search-icon" />
        </button>
      </form>
    </div>
  );
};

export default Search;
