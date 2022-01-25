import React from 'react'
import ImpassionedDetails from '../Components/ImpassionedDetails';
import Nav from '../Components/Nav';

const Details = (props) => {

    const { id, loggedIn, setLoggedIn } = props;
 
    return (
        <div>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <ImpassionedDetails id={id} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />              
        </div>
    )
}

export default Details;