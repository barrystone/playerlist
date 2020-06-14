import React from "react";

const Scroll = ({ children }) => {
  return (
    <div style={{ overflow: "hidden", height: "100%", width: "100%" }}>
      <div
        //   className="overflow-container"
        style={{
          overflowY: "auto",
          //   overflowY: "scroll",
          border: "1px solid black",
          width: "100%",
          paddingRight: "15px",
          height: "580px",
          boxSizing: "content-box",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Scroll;
