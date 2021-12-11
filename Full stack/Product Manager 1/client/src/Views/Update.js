import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Update = (props) => {
    const { id } = props;
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])
    const editProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,    
            price,
            description      
        })
            .then(res => console.log(res));
    }
    return (
        <form onSubmit={postData} className="Form">
        <h1>Product Manager</h1>
        <div className = "box">
            <label>Title</label>
            <input type="text" value={title} onChange= { (e)=>setTitle(e.target.value) } />
        </div>
        <div className = "box">
            <label>Price</label>
            <input type="text" value={price} onChange= { (e)=>setPrice(e.target.value) } />
        </div>
        <div className = "box">
            <label>Description</label>
            <input type="text" value={description} onChange= { (e)=>setDescription(e.target.value) } />
        </div>
        <div>
            <button value={postData} onChange= { (e)=>postData(e.target.value) }>Create</button>
        </div>
        <div>
            <button value={deleteData} onChange= { (e)=>deleteData(e.target.value) }>Delete</button>
        </div>
    </form>
    );
}
export default Update;

