import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductList from '../Components/ProductList';
import Product from '../Components/Product';

const Main = (props) => {

    const { setLoaded, loaded } = props;
    // const [product, setProduct] = useState([]);
   //const [loaded, setLoaded] = useState(false);
    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api/product")
    //         .then(res=>{
    //             setProduct(res.data);
    //             setLoaded(true);
    //         });     
    // }, []);
    return (
        <div>
            <Product setLoaded={setLoaded} loaded={loaded} />
            <ProductList setLoaded={setLoaded} loaded={loaded} />          
        </div>
    )
}
export default Main;

