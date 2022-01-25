import React from 'react';
import AddImpassioned from '../Components/AddImpassioned';
import Nav from '../Components/Nav';

const New = (props) => {
    const { loggedIn, setLoggedIn } = props;

    return(
        <div>
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <AddImpassioned scope={"add"} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
    )
}


export default New;