import React from 'react';

const Display = (props) => {
    const { word, fontColor, backgroundColor } = props;
    const displayStyle = {
        color: fontColor,
        backgroundColor: backgroundColor,
        textAlign: "center"
    };

    if (isNaN(word)) {
        return (
            <h1 style={displayStyle}>Word is {word}</h1>
        );
    } else {
        return (
            <h1 style={displayStyle}>The number is: {word}</h1>
        );
    }

}

export default Display;
