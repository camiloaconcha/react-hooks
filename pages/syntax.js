import React, { useEffect } from 'react';
const Syntax = () => {
    useEffect(() => {
        return () => {
            console.log('In use effect cleanup');
            cleanup;
        };
    });

    return <div></div>;
};

export default Syntax;
