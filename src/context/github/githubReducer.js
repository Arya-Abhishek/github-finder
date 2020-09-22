import {
  SEARCH_USER,
  SET_LOADING,
  CLEAR_USERS,
  GET_USERS,
  GET_REPOS,
  SEARCH_USERS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
