import React from "react";
import next from "../Assets/Next.svg";
import { cardDb } from "../Common/OptionDb";
import "../Css/OPtions.css";

const Options = () => {
  return (
    <>
      <div className="containerss">
        <div className="cards-section">
          {cardDb.map((data) => {
            return (
              <div className="card-container" key={data.id}>
                <div className="left">
                  <img src={data.image} className="icon" />
                  <span className="icon-name">{data.optionName}</span>
                </div>
                <div className="right">
                  <a href={data.path}>
                    <img src={next} className="nextarrow" alt="next" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Options;
