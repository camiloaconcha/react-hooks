import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
    return (
        <div>
            {[1, 2].map(dogId => {
                return (
                    <div key={dogId}>
                        <ImageToggleOnScroll
                            primaryImg={`/dogs/bw/dog${dogId}.jpg`}
                            secondaryImg={`/dogs/colored/dog${dogId}.jpg`}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ImageChangeOnScroll;
