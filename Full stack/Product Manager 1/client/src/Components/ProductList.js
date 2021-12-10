import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router'
import axios from 'axios';

const ProductList = (props) => {

    const [product, setProduct] = useState([]);
        
    useEffect(()=>{ 
        axios.get("http://localhost:8000/api/product")
            .then(res=>{
                setProduct(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });  
    }, []);
    return (
        <div>
            {
                product.map((product, index)=>{
                    return <Link to={`/${product._id}`} index={index}>{product.title}<br /></Link>              
                })
            
            }          
        </div>
    );
}
export default ProductList;

