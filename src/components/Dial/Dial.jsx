import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid blue', margin: '10px', padding: '10px'}}>
            <h2>Dial component</h2>
            Your Steps Count: {props.counts}
            <Knob count={props.counts}></Knob>
        </div>
    );
};

export default Dial;