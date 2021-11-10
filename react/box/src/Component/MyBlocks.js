import React, { useState } from 'react';

const MyBlocks = () => {

    const [pickColor, setPickColor] = useState("");
    const [myBlocksColor, setMyBlocksColor] = useState([]);

    const addBlocksColor = (e) => {
        e.preventDefault();
        setMyBlocksColor([...myBlocksColor, pickColor]);
    }

   return (
       <div id="main-content">
           <form>
               <label>Color</label>
               <select id="select" onChange={(e) => setPickColor(e.target.value)}>
                   <option>Pick A Color</option>
                   <option>orange</option>
                   <option>pink</option>
                   <option>yellow</option>
                   <option>teal</option>
               </select>
               <button onClick={addBlocksColor}>Add</button>
            </form>
        <div id="blocks-content">
           {
               myBlocksColor.map( (color, index) => 
                <div className={color} key={ index }>{color}</div>
               )
           }
        </div>
    </div>
   );
}

export default MyBlocks;
