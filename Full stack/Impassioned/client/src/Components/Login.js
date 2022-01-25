import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorsMessage, setErrorsMessage] = useState("");
    const {isLoggedIn, setLoggedIn} = props;

    const login = (event) => {
    //prevents refresh and reset
    event.preventDefault();
    axios
        .post(
            "http://localhost:8000/api/users/login", 
            {
                email: email,
                password: password,
            },
            {
                withCredentials: true,
            },
        )
        .then((res) => {         
            localStorage.setItem('userName', res.data.userLoggedIn);
            setLoggedIn(true);
            navigate("/home");            
        })
        .catch((err) => {
                console.log(err.response.data);
                setErrorsMessage(err.response.data.message);
        });
    };
    
    return (
        <div className="sf_container mt-3 container-md border border-primary bg-light p-3">
            <h2 className="text-primary">Login</h2>
            <p>{errorsMessage ? errorsMessage : ""}</p>
            <form onSubmit={login}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" value={email} onChange={(e) =>
                    setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" value={password} onChange={(e) =>
                        setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="loginSubmit">
                    <button type="submit" className="btn btn-primary me-2" >Login</button>
                    <Link className="btn btn-primary" to={"/registration"}>Register</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;

