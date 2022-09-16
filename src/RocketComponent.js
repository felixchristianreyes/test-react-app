/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const RocketComponent = (props) => {
  return (
    <>
      <div className="card">
        <div className="row p-5">
          <div className="col-2">
            <img alt="rocket" />
          </div>
          <div className="col-10">
            <div className="">
              <h5 className="">
                {props.flightNumber}: {props.flightName} ({props.launchYear})
              </h5>
              <p>Details: {props.details}.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RocketComponent;
