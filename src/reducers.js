import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PLAYERS_PENDING,
  REQUEST_PLAYERS_SUCCESS,
  REQUEST_PLAYERS_FAILED,
} from "./constants.js";

const intialStateSearch = {
  searchField: "",
};
export const searchPlayers = (state = intialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const intialStatePlayers = {
  isPending: false,
  rosterData: [],
  error: "",
};
export const requestPlayers = (state = intialStatePlayers, action = {}) => {
  switch (action.type) {
    case REQUEST_PLAYERS_PENDING:
      return {
        isPending: true,
      };
    case REQUEST_PLAYERS_SUCCESS:
      return {
        isPending: false,
        rosterData: action.payload,
      };
    case REQUEST_PLAYERS_FAILED:
      return {
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
