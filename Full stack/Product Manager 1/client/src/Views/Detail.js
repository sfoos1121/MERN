import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DeleteButton from '../Components/DeleteButton';

const Detail = (props) => {
    const { id } = props;
    const [item, setItem] = useState({})
    
    const deleteData = (e) => {

        e.preventDefault();
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => setItem({                
                ...res.data
            }))
    }, [])
    return (
        <div>
            <p>title: {item.title}</p>
            <p>price: {item.price}</p>
            <p>description: {item.descritpion}</p>
            <DeleteButton redirect={true} id={item._id}/>
        </div>
    )
}
export default Detail;

