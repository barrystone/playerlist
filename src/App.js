import React, { useState, useEffect } from "react";
import { produce } from "immer";
import "./App.css";
import CardList from "./component/CardList";
import SearchBox from "./component/SearchBox";
// import roster from "./_data/roster/Rockets";
// import roster from "./_data/roster/Warriors.json";
// import roster from "./_data/roster/Mavericks.json";
// import roster from "./_data/roster/Clippers.json";
// import roster from "./_data/roster/Spurs.json";
// import roster from "./_data/roster/Lakers.json";

const App = () => {
  const [searchfield, setSearchfield] = useState("");
  const [rosterData, setRosterData] = useState([]);
  let [filterRoster, setFilterRoster] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.sportsdata.io/v3/nba/stats/json/Players/HOU?key=${process.env.REACT_APP_SPORTDATAIO_API_KEY_2}`
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    setRosterData(data);
  };
  useEffect(() => {
    fetchData();
    // setRosterData(roster);
    console.log("fetching");
  }, []);
  useEffect(() => {
    setFilterRoster(rosterData);
    console.log("initial setFilterRoster");
  }, [rosterData]);
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  useEffect(() => {
    setFilterRoster(
      rosterData.map((player) =>
        (player.FirstName + " " + player.LastName)
          .toLowerCase()
          .includes(searchfield.toLowerCase())
          ? player
          : produce(player, (draftPlayer) => {
              draftPlayer.Unsearched = true;
            })
      )
    );
    console.log("onChange setFilterRoster");
  }, [searchfield]);
  const onSearchClick = () => {
    setFilterRoster(
      rosterData.filter((player) =>
        (player.FirstName + " " + player.LastName)
          .toLowerCase()
          .includes(searchfield.toLowerCase())
      )
    );
    console.log("onClick setFilterRoster");
  };
  return (
    <div className="tc">
      <h1 className="f1 ma3">Roster</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        onSearchClick={onSearchClick}
      />
      <CardList roster={filterRoster ? filterRoster : rosterData} />
    </div>
  );
};

export default App;
