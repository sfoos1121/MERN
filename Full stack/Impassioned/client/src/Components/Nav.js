import React from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Nav = (props) => {

    const {loggedIn, setLoggedIn} = props;

    const logOut = () => {
        axios.post("http://localhost:8000/api/users/logout", {}, {withCredentials: true})
        .then((res)=>{
            localStorage.removeItem('userName');
            setLoggedIn(false);
            navigate("/")
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return (
        
        <div>  
            <nav className="navbar navbar-expand-lg navbar-light fw-bold text-primary px-4 " style={{ backgroundColor: `#e3f2fd` }}>
                <div className="container-fluid">
                    <span className="navbar-brand" href="#">Impassioned</span>
                    <span><i className="bi bi-journal-richtext"></i></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse px-4" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-4">
                                {loggedIn === true ?
                                <Link className="nav-link active" to="/home">Home</Link> : null } 
                            </li>
                            <li className="nav-item px-4">
                                {loggedIn === true ?
                                <Link className="nav-link active" to="/new">Track</Link> : null }
                            </li>
                            <li className="nav-button px-4">
                                {loggedIn === true ?
                                <button className="btn btn-outline-success" onClick={logOut}>Log Out</button> : null } 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="overlay"></div>
        </div>      
    );
}

export default Nav;