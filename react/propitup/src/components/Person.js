import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h1>{ props.name }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hair} </p>
        </div>
    );
}

export default Person;

