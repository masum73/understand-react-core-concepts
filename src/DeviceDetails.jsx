import React from 'react';

const DeviceDetails = (props) => {
    return (
        <div>
            <p>Information about your device: price {props.price}</p>
        </div>
    );
};

export default DeviceDetails;