import { useReducer } from "react";
import axios from "axios";

import ShowsContext from "./showsContext";
import ShowsReducer from "./showsReducer";

import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_DETAILS,
  CLEAR_DETAILS,
} from "../types";

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    showDetails: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const searchShows = async (searchTerm) => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `http://api.tvmaze.com/search/shows?q=${searchTerm}`
    );

    console.log(data);

    setTimeout(() => dispatch({ type: SEARCH_SHOWS, payload: data }), 250);
  };

  const getDetails = async (id) => {
    dispatch({
      type: SET_LOADING,
    });

    const { data } = await axios.get(`http://api.tvmaze.com/shows/${id}`);

    console.log(data);

    dispatch({
      type: SET_DETAILS,
      payload: data,
    });
  };

  const clearDetails = () => {
    dispatch({
      type: CLEAR_DETAILS,
    });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        showDetails: state.showDetails,
        loading: state.loading,
        searchShows,
        getDetails,
        clearDetails,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
