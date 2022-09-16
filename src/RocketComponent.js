/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const RocketComponent = (props) => {
  return (
    <div className="card">
      <div className="container p-3 d-flex">
        <div className="p-5">
          <img alt="rocket" />
        </div>
        <div className="ms-5">
          <h5 className="">
            {props.flightNumber}: {props.flightName} ({props.launchYear})
          </h5>
          <p>Details: {props.details}.</p>
        </div>
      </div>
    </div>
  );
};

export default RocketComponent;
