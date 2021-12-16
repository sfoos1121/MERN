import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate} from '@reach/router';
import DeleteButton from './DeleteButton';

const Authors = (props) => {
    const { id } = props;
    const [name, setName] = useState([{}]);
    const [refresh, setRefresh] = useState(false);

    useEffect(()=>{ 
        const url = `http://localhost:8000/api/authors/`;

        axios.get(url)
            .then(res=>{
                setName(res.data);  
                console.log(res.data);            
            })
            .catch((err)=>{
                console.log(err);
            });  
    }, [refresh]);

    const editNavigate = (id) => {       
        navigate(`/edit/${id}`);        
    }

    return (
        <div>
            <div className="header">
                <h1>Favorite Authors</h1> 
                <Link to="/new">Add an author</Link>    
                <p>We have quotes for</p>
            </div>
            <table>
                <tr className="tableTitle">
                    <td className ="authors">Author</td>
                    <td className ="actions">Actions Available</td>
                </tr>  
            {
                name.map((value, index)=>{
                    return (                        
                        <tr>
                            <td className="name">{value.name}</td>
                            <td>
                                <input type="button" className="editButton" 
                                    onClick={ () => editNavigate([value._id]) } value="edit"></input>
                                <DeleteButton id={value._id} refresh={refresh} setRefresh={setRefresh} />
                            </td>                            
                        </tr>                       
                    );
                })
            }
        </table>
        </div>
    );
}
            
export default Authors;



