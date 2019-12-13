import React, { useRef } from 'react';

export default function ImageToggleOnMouseOver({ primaryImg, secondaryImg }) {
    const imageRef = useRef(null);

    const mystyle = {
        maxWidth: '300px',
        maxHeight: '300px',
    };

    console.log(imageRef);

    return (
        <div>
            <img
                style={mystyle}
                onMouseOver={() => {
                    imageRef.current.src = secondaryImg;
                }}
                onMouseOut={() => {
                    imageRef.current.src = primaryImg;
                }}
                src={primaryImg}
                alt="Doggie"
                ref={imageRef}
            />
        </div>
    );
}
