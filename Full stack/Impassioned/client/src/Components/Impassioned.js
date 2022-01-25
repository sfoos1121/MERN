import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import { format, compareAsc } from 'date-fns';

const Impassioned = (props) => {
    const { loggedIn, setLoggedIn } = props; 
    const [impassionedInfo, setImpassionedInfo] = useState([]);  
    const [refresh, setRefresh] = useState(false);  

    useEffect(()=>{

        let url = `http://localhost:8000/api/impassioned/`;        

        if ( loggedIn === true ) {

            axios.get(url)
                .then(res=>{
                    let stateObj = res.data;                    
                    let likesArr = [];

                    for (let i=0;i<res.data.length;i++) {
                        likesArr = res.data[i].likes; 
                        
                        //Preset to false, set to true if the username is found on a like record.
                        stateObj[i].isLiked = false;                         
                        
                        for (let j=0;j<likesArr.length;j++) {
                            if (likesArr[j].userId === localStorage.getItem('userName')) {                                
                                stateObj[i].isLiked = true;
                                break;                                                           
                            }
                            else {
                                stateObj[i].isLiked = false;  
                            }
                        }
                        
                    }                    
                    setImpassionedInfo(stateObj);                    
                })
                .catch((err)=>{
                    console.log(err);
                }) 
        }

        else {
            //navigate back to login screen.
            navigate('/');
        }

    }, [refresh]);
    

    const editNavigate = (id) => {
        navigate(`/edit/${id}`);
    }

    const likeMood = (e, index) => {
        e.preventDefault(); 
        const url = `http://localhost:8000/api/impassioned/${impassionedInfo[index]._id}`;                

        const impObj = impassionedInfo[index];
        let data = {};        

        if ( impObj.likes.length === 0 || impObj.likes == null  ) {
            data = {...impObj,
                likes: [{
                    userId: localStorage.getItem('userName')
                }]
            }
        }
        else {
            let likeToPush = {
                userId: localStorage.getItem('userName')
            };

            data = {...impObj};
            data.likes.push(likeToPush);                
        }
        
        axios.put(url, data, { withCredentials: true })
        .then((res) => {            
            setRefresh(!refresh);
        })
        .catch((err) => {            
            console.log(err);
        });
    }

    return (
        <div className="Stats">
            <div className="title mt-3">
                <h1>Stats</h1> 
                <p>Check in on yourself</p>
            </div>
        <div className="container-md">
            <div className="row">
                <div className="col">
                    <p>Name</p>
                </div>
                <div className="col">
                    <p>Date</p>
                </div>
                <div className="col">
                    <p>Time</p>
                </div>
                <div className="col">
                    <p>Mood</p>
                </div>
                <div className="col">
                    <p>Actions</p>
                </div>
            </div>
            {
                impassionedInfo.map((value, index)=>{
                    return (                        
                        <div key={index} className="row">
                            <div className="col">
                                <p className="name ms-3 mx-3">{value.name}</p>
                            </div>
                            <div className="col">
                                <p className="date ms-3 mx-3">{format(new Date(value.date), 'MM/dd/yyyy')}</p>
                            </div>
                            <div className="col">
                                <p className="time ms-3 mx-3">{value.time}</p>
                            </div>
                            <div className="col">
                                <p className="mood ms-3 mx-3">{value.mood}</p>
                            </div>
                            <div className="col">
                                <Link className="btn btn-success me-1" to={"/" + value._id}>Details<i className="bi bi-journal-bookmark mx-1"></i></Link>
                                <Link className="btn btn-secondary me-1" to={"/edit/" + value._id}>Edit<i className="bi bi-journal-code mx-1"></i></Link>
                                <button onClick={impassionedInfo[index].isLiked === false ? (e) => likeMood(e, index) : null} className={impassionedInfo[index].isLiked === false ? "btn btn-light" : "btn btn-info"}><i className="bi bi-hand-thumbs-up"></i></button>
                            </div>
                        </div>
                    );
                })
            }
        </div>        
    </div>
    );
}
    

export default Impassioned;