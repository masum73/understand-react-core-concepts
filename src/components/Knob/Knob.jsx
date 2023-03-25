import React from 'react';

const Knob = (props) => {
    return (
        <div style={{border: '2px solid green', margin: '10px', padding: '10px'}}>
            <h2>Knob component</h2>
            <p>Your steps: {props.count}</p>
        </div>
    );
};

export default Knob;