import { useState, useContext } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// Context
import ShowsContext from "../context/shows/showsContext";
import AlertsContext from "../context/alerts/alertsContext";

// Components
import Alert from "./Alert";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const showsContext = useContext(ShowsContext);
  const { searchShows } = showsContext;

  const { alert, setAlert } = useContext(AlertsContext);

  const onSearchHandler = (e) => {
    e.preventDefault();

    if (searchTerm === "") {
      setAlert("Please enter something", "danger");
    } else {
      searchShows(searchTerm);
    }
  };

  return (
    <div className="search">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search For Tv Show"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-block" onClick={onSearchHandler}>
          <MagnifyingGlassIcon className="search-icon" />
        </button>
      </form>
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}
    </div>
  );
};

export default Searchbar;
