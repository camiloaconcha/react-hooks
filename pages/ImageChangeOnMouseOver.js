import React from 'react';

const ImageChangeOnMouseOver = () => {
    const mystyle = {
        maxWidth: '300px',
        maxHeight: '300px',
    };
    return (
        <div>
            <img style={mystyle} src="/dogs/dog1.jpg" alt="" />
            &nbsp;&nbsp;&nbsp;
            <img style={mystyle} src="/dogs/dog2.jpg" alt="" />
        </div>
    );
};

export default ImageChangeOnMouseOver;
