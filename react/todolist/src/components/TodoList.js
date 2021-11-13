import React, { useState } from 'react';

const TodoList = () => {
    const [toDo, setToDo] = useState("");
    const [thingsToDo, setThingsToDo] = useState([]);

    const pushToDo = (e) => {
        e.preventDefault();

        setThingsToDo([...thingsToDo, {
            toDo: toDo,
            isComplete: false  
        }]);  
        
        setToDo('');
    }

    const markComplete = (index) => {
        let obj = thingsToDo[index];

        //if isComplete is true it will become false and vice versa.
        obj.isComplete = !obj.isComplete;

        //Get everything from the to do list up until the item being marked complete
        let arr = thingsToDo.slice(0, index);

        //add your object to the array followed by anything else that follows it.
        arr = [...arr, obj].concat(thingsToDo.slice(index + 1));      
    
        //Set the modified array in to state
        setThingsToDo(arr);
    }

    const goneFromList = (index) => {
        const arr = thingsToDo.filter((completed, i) => i !== index);
        setThingsToDo(arr);
    }

    return (
        <div className="mx-auto custom-width">
            <form>
                <input type="text" className="p-3 rounded" value={toDo} onChange={(e) => setToDo(e.target.value)} />
                <input type="button" value="submit" className="bg-primary text-white p-3 m-3 rounded" 
                onClick={pushToDo} />
                {
                    thingsToDo.map( (value, index) => {
                        return (
                            <div className="d-flex justify-content-between align-items-center" key={index}>
                                <div>
                                    <p className={(thingsToDo[index].isComplete === true)?
                                        "m-0 me-1 d-inline text-decoration-line-through":"m-0 me-1 d-inline"}>{value.toDo}</p>
                                </div>
                                <div>
                                <input type="checkbox" onClick={() => markComplete(index)} />
                                </div>
                                <input type="button" value="delete" onClick={() => goneFromList(index)}
                                className="bg-dark text-white p-3 rounded" 
                                />
                            </div>                        
                            )
                    })
                }
            </form>            
        </div>
    );
}

export default TodoList;