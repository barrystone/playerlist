import React, { useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { rocketRoster } from "./_data/roster";

const App = () => {
  const [searchfield, setSearchfield] = useState("");
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  const filterRoster = rocketRoster.filter((player) => {
    return player.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return (
    <div className="tc">
      <h1>Teams</h1>;
      <SearchBox onSearchChange={onSearchChange} />
      <CardList roster={filterRoster} />
    </div>
  );
};

export default App;
