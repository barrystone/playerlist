import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { produce } from 'immer';
import '../assets/css/App.css';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Bar from '../components/Bar';

import { setSearchField, requestPlayers } from '../actions';

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
    onRequestPlayers: (team) => dispatch(requestPlayers(team)),
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

  const [selectTeam, setSelectTeam] = useState('Roster');

  useEffect(() => {
    // DEFAULT request team 'HOU'
    // onRequestPlayers(selectTeam);
    console.log('fetching');
  }, []);
  useEffect(() => {
    setFilterRoster(rosterData);
    console.log('initial setFilterRoster');
  }, [rosterData]);

  useEffect(() => {
    setFilterRoster(
      rosterData.map((player) =>
        (player.FirstName + ' ' + player.LastName)
          .toLowerCase()
          .includes(searchField.toLowerCase())
          ? player
          : produce(player, (draftPlayer) => {
              draftPlayer.Unsearched = true;
            })
      )
    );
    console.log('onChange setFilterRoster');
  }, [searchField]);
  const onSearchClick = () => {
    setFilterRoster(
      rosterData.filter((player) =>
        (player.FirstName + ' ' + player.LastName)
          .toLowerCase()
          .includes(searchField.toLowerCase())
      )
    );
    console.log('onClick setFilterRoster');
  };

  //has problem todo

  const onTeamChange = (teamAbbr, teamName) => {
    setSelectTeam(teamName);
    onRequestPlayers(teamAbbr);
    console.log('selectTeam', selectTeam);
    // onRequestPlayers(selectTeam);
    console.log('fetching (changeTeam)');
  };

  return (
    <div className='tc'>
      <header>
        <Bar
          onSearchChange={onSearchChange}
          onSearchClick={onSearchClick}
          onTeamChange={onTeamChange}
          team={selectTeam}
        />
      </header>
      <Scroll>
        {isPending ? (
          <h1>Loading</h1>
        ) : (
          <ErrorBoundary>
            <CardList roster={filterRoster ? filterRoster : rosterData} />
          </ErrorBoundary>
        )}
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
