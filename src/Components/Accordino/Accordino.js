// import React, { useState } from 'react';
// import * as React from 'react';
import "./Filter.css";
import Leftside from "./LeftSide/Leftside";
import ListOfCard from "./RightSide/ListOfCard";
import RightSide from "./RightSide/RightSide";

const Accordino = () => {
  return (
    <div className="filter">
      <div>
        <Leftside />
      </div>
      <div>
        <RightSide />
        <ListOfCard />
      </div>
    </div>
  );
};

export default Accordino;
