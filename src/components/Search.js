import { useState, useContext } from "react";

import ShowsContext from "../contexts/shows/showsContext";
import AlertsContext from "../contexts/alerts/alertsContext";

import FormAlert from "./FormAlert";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { type } from "@testing-library/user-event/dist/type";

const Search = () => {
  const [searchTitle, setSearchTitle] = useState("");

  const showsContext = useContext(ShowsContext);
  const { searchShows } = showsContext;

  const { alert, setAlert } = useContext(AlertsContext);

  const onSearchHandler = (e) => {
    e.preventDefault();

    if (searchTitle === "") {
      setAlert("Please enter a TV Show", "warning");
    }
    searchShows(searchTitle);
  };

  return (
    <div className="search">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search TV Show"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        ></input>
        <button className="btn btn-block" onClick={onSearchHandler}>
          <MagnifyingGlassIcon className="search-icon" />
        </button>
      </form>
      {alert ? <FormAlert message={alert.message} type={alert.type} /> : null}
    </div>
  );
};

export default Search;
