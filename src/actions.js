import { apiCall } from "./api/api";

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PLAYERS_PENDING,
  REQUEST_PLAYERS_SUCCESS,
  REQUEST_PLAYERS_FAILED,
} from "./constants.js";

// import roster from "./_data/roster/Rockets";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestPlayers = () => (dispatch) => {
  dispatch({ type: REQUEST_PLAYERS_PENDING });
  apiCall(
    `https://api.sportsdata.io/v3/nba/stats/json/Players/HOU?key=${process.env.REACT_APP_SPORTDATAIO_API_KEY_2}`
  )
    .then((result) =>
      dispatch({ type: REQUEST_PLAYERS_SUCCESS, payload: result })
    )
    .catch((error) =>
      dispatch({ type: REQUEST_PLAYERS_FAILED, payload: error })
    );
  // Local data
  // dispatch({ type: REQUEST_PLAYERS_PENDING });
  // try {
  //   dispatch({ type: REQUEST_PLAYERS_SUCCESS, payload: roster });
  // } catch (error) {
  //   dispatch({ type: REQUEST_PLAYERS_FAILED, payload: error });
  // }
};
