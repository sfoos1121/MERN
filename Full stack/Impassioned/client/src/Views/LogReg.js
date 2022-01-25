import React from 'react';
import Login from '../Components/Login';
import Nav from '../Components/Nav';

const LogReg = (props) => {

    const { loggedIn, setLoggedIn } = props;
 
    return (
        <div>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
    )
}

export default LogReg;