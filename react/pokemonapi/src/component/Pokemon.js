import React, { useEffect, useState } from 'react';

const Pokemon = (props) => {
    const [pokes, setPokes] = useState([]);
 
    useEffect(() => {
        const pokeapi = 'https://pokeapi.co/api/v2/pokemon?limit=2000'
        
        fetch(pokeapi)
            .then(response => response.json())
            .then(response => {               
                setPokes(response.results);
            })
            .catch ((err) => console.log (err))
    }, []);
 
    return (
        <div>
            <h1>Fetch Pokemon</h1>
            <ul>
            {pokes.map((poke, index)=>{
                return (<div key={index}>{poke.name}</div>)
            })}
            </ul>
        </div>
    );
}
export default Pokemon;

