import React from 'react';

const Strut = (props) => {
    const { size, vertical = false } = props;

    const getStyle = () => {
        if (vertical) {
            return { height: size };
        }
        return { width: size };
    };

    return <div style={getStyle()} aria-hidden />;
};

export default Strut;
