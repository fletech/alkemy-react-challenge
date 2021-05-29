import React from "react";

const StatField = ({ powerstats, powerstatName }) => {
  return (
    <div className="stat-field">
      <div className="range">
        <div
          className="value"
          style={{
            width:
              powerstats[powerstatName] !== "null"
                ? `${parseInt(powerstats[powerstatName])}%`
                : "0",
          }}
        ></div>
      </div>
      <small>
        {`${powerstatName}: `}
        {powerstats[powerstatName] !== "null"
          ? parseInt(powerstats[powerstatName])
          : "0"}
      </small>
    </div>
  );
};

export default StatField;
