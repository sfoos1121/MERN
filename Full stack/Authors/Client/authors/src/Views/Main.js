import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Authors from '../Components/Authors';

const Main = (props) => {

    const { setLoaded, loaded } = props;
 
    return (
        <div>
            <Authors setLoaded={setLoaded} loaded={loaded} />  
        </div>
    )
}
export default Main;