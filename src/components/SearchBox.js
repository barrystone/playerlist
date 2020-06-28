import React from "react";
import { Button } from "@material-ui/core";

const SearchBox = ({ onSearchChange, onSearchClick }) => {
  return (
    <div className="pa2 ml3">
      <input
        className="pa3 ba"
        type="search"
        placeholder="Player name"
        onChange={onSearchChange}
        onKeyPress={(e) => (e.key === "Enter" ? onSearchClick() : null)}
      />
      &nbsp;&nbsp;
      <Button
        variant="contained"
        justify="space-between"
        onClick={onSearchClick}
      >
        search
      </Button>
    </div>
  );
};

export default SearchBox;
