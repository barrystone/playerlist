import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { produce } from "immer";
import "../assets/css/App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

import { setSearchField, requestPlayers } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchPlayers.searchField,
    rosterData: state.requestPlayers.rosterData,
    isPending: state.requestPlayers.isPending,
    error: state.requestPlayers.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestPlayers: () => dispatch(requestPlayers()),
  };
};

const App = (props) => {
  const {
    searchField,
    onSearchChange,
    rosterData,
    onRequestPlayers,
    isPending,
  } = props;
  let [filterRoster, setFilterRoster] = useState([]);

  useEffect(() => {
    onRequestPlayers();
    console.log("fetching");
  }, []);
  useEffect(() => {
    setFilterRoster(rosterData);
    console.log("initial setFilterRoster");
  }, [rosterData]);

  useEffect(() => {
    setFilterRoster(
      rosterData.map((player) =>
        (player.FirstName + " " + player.LastName)
          .toLowerCase()
          .includes(searchField.toLowerCase())
          ? player
          : produce(player, (draftPlayer) => {
              draftPlayer.Unsearched = true;
            })
      )
    );
    console.log("onChange setFilterRoster");
  }, [searchField]);
  const onSearchClick = () => {
    setFilterRoster(
      rosterData.filter((player) =>
        (player.FirstName + " " + player.LastName)
          .toLowerCase()
          .includes(searchField.toLowerCase())
      )
    );
    console.log("onClick setFilterRoster");
  };
  return isPending ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1 ma3">Roster</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        onSearchClick={onSearchClick}
      />
      <Scroll>
        <ErrorBoundary>
          <CardList roster={filterRoster ? filterRoster : rosterData} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
