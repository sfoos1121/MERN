import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const { id, refresh, setRefresh } = props;


    const deleteAuthor = (e) => {  
        const url = `http://localhost:8000/api/authors/${id}`;
        
        axios.delete(url)
        .then((res) => {
            setRefresh(!refresh);
            navigate("/");
        })
        .catch((err)=> {
            console.log(err);
        })       
    }

    return (
        <input type="button" className="deleteButton" value="Delete" onClick={deleteAuthor} />
    );
}

export default DeleteButton;