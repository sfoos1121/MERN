import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const { id, loaded, setLoaded, redirect } = props;


    const deleteProduct = () => {        
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then((res) => {
            console.log(res);
            if ( redirect === true ) {
                navigate('/');
            }
            else {
                setLoaded(!loaded);
            }
        })
        .catch((err)=> {
            console.log(err);
        })       
    }

    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    );
}

export default DeleteButton;