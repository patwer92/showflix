import { useReducer } from "react";
import axios from "axios";
import ShowsContext from "./showsContext";
import ShowsReducer from "./showsReducer";
import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW,
} from "../types";

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const searchShows = async (searchTerm) => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );

    console.log(data);

    setTimeout(() => {
      dispatch({
        type: SEARCH_SHOWS,
        payload: data,
      });
    }, 2000);
  };

  const getSingleShow = async (id) => {
    dispatch({
      type: SET_LOADING,
    });

    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);

    console.log(data);

    setTimeout(() => {
      dispatch({
        type: SET_SINGLE_SHOW,
        payload: data,
      });
    }, 1000);
  };

  const clearSingleShow = () => {
    dispatch({
      type: CLEAR_SINGLE_SHOW,
    });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
        getSingleShow,
        clearSingleShow,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
