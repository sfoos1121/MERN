import React from 'react';
import AddImpassioned from '../Components/AddImpassioned';
import Nav from '../Components/Nav';

const Edit = (props) => {

    const { scope, id, loggedIn, setLoggedIn } = props;
 
    return (
        <div> 
            <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <AddImpassioned scope={"edit"} id={id} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
    )
}
export default Edit;