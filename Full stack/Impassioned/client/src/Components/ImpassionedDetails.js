import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { Link, navigate } from '@reach/router';

const ImpassionedDetails = (props)=>{
    const { id } = props;
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [mood, setMood] = useState("");
    const [positivity, setPositivity] = useState("");
    const [gratitude, setGratitude] = useState("");
    const [goals, setGoals] = useState("");
    const [wellness, setWellness] = useState("");
    const { loggedIn, setLoggedIn } = props; 

    useEffect(()=>{

        const url = `http://localhost:8000/api/impassioned/${id}`

        if ( loggedIn === true ) {

        axios.get(url)
            .then((res)=>{
                setName(res.data.name);
                setDate(res.data.date);  
                setTime(res.data.time);
                setMood(res.data.mood);
                setPositivity(res.data.positivity);         
                setGratitude(res.data.gratitude);
                setGoals(res.data.goals);
                setWellness(res.data.wellness);
            })
            .catch((err)=>{
                console.log(err);
            });
        }
        
            else {
                //navigate back to login screen.
                navigate('/');
            }

    },[])

    return (
        <div className="Details">
            <div className="allDetails">
                <div className="h1D mt-3 ">
                    <h1>Details</h1>
                </div>
                <div className="row">
                    <div className="col mt-1 text-justify">
                        <p>Name: {name}</p>
                        <p>Date: {date}</p>
                        <p>Time: {time}</p>
                        <p>Mood: {mood}</p>
                        <p>Positivity: {positivity}</p>
                        <p>Gratitude {gratitude}</p>
                        <p>Goals: {goals}</p>
                        <p>Wellness: {wellness}</p>
                    </div>
                </div>
                <div className="deleteBtn">
                    <DeleteButton loggedIn={loggedIn} setLoggedIn={setLoggedIn} id={id} />
                </div>
            </div>
        </div>
    )
}

export default ImpassionedDetails;