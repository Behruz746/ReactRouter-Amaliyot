import React from "react";
import uuid from "react-uuid";

import index from "../constants/index";

function Steps() {
  return (
    <>
      {index.map((data) => (
        <div className="colume" key={uuid()}>
          <img src={data.images} alt="home logo" className="Home__image" />
          <div className="Home__content">
            <div className="text">
              <span>{data.step}</span>
              <p>{data.title}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Steps;
