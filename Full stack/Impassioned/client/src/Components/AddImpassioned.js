import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { navigate, Link} from '@reach/router';

const AddImpassioned = (props) => {
    const { scope, id, loggedIn, setLoggedIn } = props;
    const [newName, setNewName] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newTime, setNewTime] = useState("");
    const [newMood, setNewMood] = useState("");
    const [newPositivity, setNewPositivity] = useState("");
    const [newGratitude, setNewGratitude] = useState("");
    const [newGoals, setNewGoals] = useState("");
    const [newWellness, setNewWellness] = useState("");
    const [errors, setErrors] = useState("");

    useEffect(()=>{
        if ( loggedIn === false ) {
            navigate('/');
        }
        else if ( scope === 'edit' && loggedIn === true ) {

            const url = `http://localhost:8000/api/impassioned/${id}`           
            
            axios.get(url)
            .then((res)=>{
                setNewName(res.data.name);
                setNewDate(res.data.date);  
                setNewTime(res.data.time);
                setNewMood(res.data.mood);
                setNewPositivity(res.data.positivity);
                setNewGratitude(res.data.gratitude);
                setNewGoals(res.data.goals);
                setNewWellness(res.data.wellness);                         
            })
            .catch((err)=>{
                console.log(err);
            });
        }    
    },[]);

    const submitData=(e) => {
        e.preventDefault();

        const data = {
            name: newName,
            date: newDate,
            time: newTime,
            mood: newMood,
            positivity: newPositivity,
            gratitude: newGratitude,
            goals: newGoals,
            wellness: newWellness,
            createdBy: localStorage.getItem('userName')
        };

        const editNavigate = (id) => {
            navigate(`/edit/${id}`);
        }

        if (scope === 'add') {

            const url = `http://localhost:8000/api/impassioned/`;            

            axios.post(url, data, { withCredentials: true })
                .then(res=>{
                    navigate('/home');
                    //console.log(res);
                })
                .catch((err) => {
                    setErrors(err.response.data.errors);
                    console.log(err.response.data.errors);
                });
        }

        else {
            const url = `http://localhost:8000/api/impassioned/${id}`;

            axios.put(url, data, { withCredentials: true })
                .then((res) => {
                    navigate('/home');
                })
                .catch((err) => {
                    setErrors(err.response.data.errors);
                });
        }
    }

    return (
        <form onSubmit={submitData}  className="form container">
            <div className="header mt-3">
                <h1>Track</h1>
                <p>How are you feeling?</p>
                </div>
                <div className="formInfo mb-3">
                        <label className="mx-3">Name</label>
                        <input type="text" className="input" onChange={(e) => setNewName(e.target.value)} value={newName} />
                        {errors.name? <p className="error">{errors.name.message}</p> : null}
                    </div>
                    <div className='formSelect'>
                        <label className="mx-3">Date</label>
                        <input type="date" className="input" onChange={(e) => setNewDate(e.target.value)} value={newDate} />
                        {errors.date? <p className="error">{errors.date.message}</p> : null}
                        <label className="mx-3">Time</label>
                        <input type="time" className="input" onChange={(e) => setNewTime(e.target.value)} value={newTime} />
                        {errors.time? <p className="error">{errors.time.message}</p> : null}
                        <label className="mx-3">Mood</label>
                        <select id="selectMood" onChange={(e) => setNewMood(e.target.value)} value={newMood}>
                            <option>Select Mood</option>
                            <option>&#128513; Happy</option>
                            <option>&#128512; Content</option>
                            <option>&#128521; Calm</option>
                            <option>&#128522; Peaceful</option>
                            <option>&#128528; Neutral</option>
                            <option>&#128530; Sad</option>
                            <option>&#128531; Depressed</option>
                            <option>&#128532; Dissappointed</option>
                            <option>&#128534; Anxious</option>
                            <option>&#128553; Fearful</option>
                            <option>&#129324; Angry</option>
                            <option>&#128544; Irritable</option>
                            <option>&#129314; Disgusted</option>
                            <option>&#128562; Suprised</option>
                            <option>&#128533; Unsure</option>
                            <option>&#129320; It's complicated</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="entry1 mt-5">
                                <label>Positivity</label>
                                <p>Name something positive that happened</p>
                                <textarea maxLength="500" onChange={(e) => setNewPositivity(e.target.value)} value={newPositivity}>
                                </textarea>
                            </div>
                            <div className="entry2 mt-5">
                                <label>Gratitude</label>
                                <p>Name something or someone that you are thankful for</p>
                                <textarea maxLength="500" onChange={(e) => setNewGratitude(e.target.value)} value={newGratitude}>
                                </textarea>
                            </div>                            
                        </div>
                        <div className="col">
                            <div className="entry3 mt-5">
                                <label>Goals</label>
                                <p>Name something that you want to improve on or accomplish</p>
                                <textarea maxLength="500" onChange={(e) => setNewGoals(e.target.value)} value={newGoals}>
                                </textarea>
                            </div>
                            <div className="entry$ mt-5">
                                <label>Wellness</label>
                                <p>Name something you did to care for yourself (personal care, hobbies, exercise, etc)</p>
                                <textarea maxLength="500" onChange={(e) => setNewWellness(e.target.value)} value={newWellness}>
                                </textarea>
                            </div>                            
                        </div>
                    </div>                 
                    <div className="addEntry mt-3">
                        <button type="submit" className="addEntry btn btn-primary" value="Add Entry">{ scope !== 'edit' ? "Add Entry": "Edit Entry"}<i className="bi bi-journal-plus ms-1"></i></button>
                    </div>
        </form>
    );
}

export default AddImpassioned;
