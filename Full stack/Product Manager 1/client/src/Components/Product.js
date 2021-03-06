//import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = (props) => {
    const { setLoaded, loaded } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

const postData = (e) => {    
    e.preventDefault();

    axios.post('http://localhost:8000/api/product', {
            title,    
            price,
            description 
        })
            .then(res=> {
                console.log(res)
                setTitle('');
                setPrice('');
                setDescription('');
                setLoaded(!loaded);                
            })
            .catch(err=>console.log(err))    
};

const deleteData = (e) => {

    e.preventDefault();

    //code for deleteData goes here.
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
        <div className = "box2">
            <label>Description</label>
            <input type="text" value={description} onChange= { (e)=>setDescription(e.target.value) } />
        </div>
        <div>
            <button value={postData} onChange= { (e)=>postData(e.target.value) }>Create</button>
        </div>
    </form>
    );
}

export default Product;