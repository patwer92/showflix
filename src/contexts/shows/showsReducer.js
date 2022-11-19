import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_DETAILS,
  CLEAR_DETAILS,
} from "../types";

const showsReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SHOWS:
      return {
        ...state,
        shows: action.payload,
        loading: false,
      };
    case SET_DETAILS:
      return {
        ...state,
        showDetails: action.payload,
        loading: false,
      };
    case CLEAR_DETAILS:
      return {
        ...state,
        showDetails: {},
      };
    default:
      return state;
  }
};

export default showsReducer;
