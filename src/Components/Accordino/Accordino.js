import React, { useState } from 'react';
// import * as React from 'react';
import './Filter.css';
import Leftside from './LeftSide/Leftside';
import RightSide from './RightSide.css/RightSide';

const Accordino = () => {
    
    return (
        <div className='filter'>
        <div style={{backgroundColor:"red"}}>
            <Leftside></Leftside>
        </div>
            {/* ---------- */}
        <div>
        <RightSide></RightSide>
        </div>
        </div>
    );
};

export default Accordino;