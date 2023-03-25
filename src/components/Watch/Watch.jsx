
import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    let [count, setCount] = useState(0);
    const increaseCounts = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    useEffect(()=> {
        console.log(count);
    },[count])
    return (
        <div style={{border: '2px solid red', margin: '10px', padding: '10px'}}>
            <h2>This is my smart watch</h2>
            <p>Steps: {count}</p>
            <button onClick={increaseCounts}>Run</button>
            <Dial counts = {count}></Dial>
            {/* <button onClick={()=> {setCount(count + 1)}}>Run</button> */}
        </div>
    );
};

export default Watch;