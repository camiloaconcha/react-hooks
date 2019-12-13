import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver
                primaryImg="/dogs/bw/dog1.jpg"
                secondaryImg="/dogs/colored/dog1.jpg"
            />
            <br />
            <ImageToggleOnMouseOver
                secondaryImg="/dogs/colored/dog2.jpg"
                primaryImg="/dogs/bw/dog2.jpg"
            />
        </div>
    );
};

export default ImageChangeOnMouseOver;
