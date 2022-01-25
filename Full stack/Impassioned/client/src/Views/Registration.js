import React from 'react';
import Register from '../Components/Register';
import Nav from '../Components/Nav';

const Registration = (props) => {

    const { loggedIn, setLoggedIn } = props;
 
    return (
        <div>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Register loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
    )
}

export default Registration;