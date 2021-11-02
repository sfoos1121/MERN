import React, { useState } from 'react';

const Person = (props) => {
    const { name, lastName, firstName, age, hair } = props;
    const [ addBirthday, setAddBirthday ] = useState(age);
    return (
        <div>
            <h1>{ name }</h1>
            <p>Age: { addBirthday }</p>
            <p>Hair Color: { hair} </p>            
            <button onClick={ (event) => setAddBirthday(addBirthday +1)}>Birthday Button for {firstName} {lastName}
            </button>
        </div>
    )
}

export default Person;

