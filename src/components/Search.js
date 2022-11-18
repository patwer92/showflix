import { useState } from "react";

import FormError from "./FormError";
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
          placeholder="Search TV Shows"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button className="btn btn-block" onClick={onSearchHandler}>
          <MagnifyingGlassIcon className="search-icon" />
        </button>
      </form>
      <FormError message="Please enter a TV show" type="danger" />
    </div>
  );
};

export default Search;
