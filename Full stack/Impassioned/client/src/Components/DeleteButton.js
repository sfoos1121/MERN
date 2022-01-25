import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {    
    const { loggedIn, setLoggedIn, id } = props; 

    const deleteImpassioned = (e) => {  
        
        const url = `http://localhost:8000/api/impassioned/${id}`;

        if ( loggedIn === true ) {
        
            axios.delete(url)
            .then((res) => {
                navigate("/home");
            })
            .catch((err)=> {
                console.log(err);
            })
        }  

        else {
            //navigate back to login screen.
            navigate('/');
        }    
    }

    return (
        <button type="button" className="deleteButton btn btn-danger mb-1" onClick={deleteImpassioned}>Delete Entry<i className="bi bi-journal-minus mx-1"></i></button>
    );
}

export default DeleteButton;