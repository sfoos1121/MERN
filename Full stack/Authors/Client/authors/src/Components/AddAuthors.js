import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


const AddAuthors = (props) => {
    const { scope, id } = props;
    const [newName, setNewName] = useState("");
    const [loaded, setLoaded] = useState("");
    const [errors, setErrors] = useState([]); 

    useEffect(()=>{

        if ( scope === 'edit') {

            const url = `http://localhost:8000/api/authors/${id}`
            console.log(url);
           
            axios.get(url)
            .then((res)=>{
                setNewName(res.data.name);    
                console.log(res.data);           
            })
            .catch((err)=>{
                console.log(err);
            });

        }
    },[])

const submitName = (e) => {    
    e.preventDefault();
  
    const data = {
        name: newName  
    };

    if ( scope === 'add') {            
    
        const url = `http://localhost:8000/api/authors/`;
    
        axios.post(url, data)
            .then(res=>{
                navigate('/');
            })
            .catch((err)=>{
                setErrors(err.response.data.errors);
            });   
}

    else {
        const url = `http://localhost:8000/api/authors/${id}`;

        axios.put(url, data)
        .then((res)=>{
            navigate('/');
        })
        .catch((err)=>{
            setErrors(err.response.data.errors);                 
        });
    }


}

const cancelFunction = (e) => {
    navigate('/');
}

return (
    <form onSubmit={submitName} className="form">
        <h1>Favorite Authors</h1>
        <Link to="/">Add an author</Link>    
        <p>Add a new author</p>
        <div className = "box">
            <label>Name</label>
            <input type="text" className="input" onChange= { (e)=>setNewName(e.target.value)} value={newName} />
            {errors.name? <p className="error">{errors.name.message}</p> : null}
        </div>
        <div>
            <input type="button" className="cancel" value="cancel" onClick={cancelFunction} />          
            <input type="submit" className="submit" value="submit" />
        </div>
    </form>
    );
}

export default AddAuthors;
