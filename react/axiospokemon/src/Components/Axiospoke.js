import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Axiospoke = () => {
    
    const [pokes, setPokes] = useState([]);
    
    useEffect(() => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon?offset=300&limit=807')
        .then(response => {
            console.log(response.data.results);
            setPokes(response.data.results);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>Fetch Pokemon</h1>
            <ul>
            {
                    pokes.map((pokemon, index) => {
                        return (
                            <li key={index}>{pokemon.name}</li>
                        );
                    })
            }               
            </ul>
        </div>
    );
}

export default Axiospoke;






