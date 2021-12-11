import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router'
import axios from 'axios';
import Product from './Product';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const { loaded, setLoaded } = props;
    const [product, setProduct] = useState([]);
        
    useEffect(()=>{ 
        axios.get("http://localhost:8000/api/product")
            .then(res=>{
                setProduct(res.data);
            })
            .catch((err)=>{
                console.log(err);
            });  
    }, [loaded]);
    return (
        <div>
            {
                product.map((product, index)=>{
                    return (
                        <div>
                            <Link to={`/${product._id}`} index={index}>{product.title}<br /></Link>
                            <DeleteButton redirect={false} loaded={loaded} setLoaded={setLoaded} id={product._id}/>  
                        </div>  
                    );             
                })
            }         
        </div>
    );
}
export default ProductList;

