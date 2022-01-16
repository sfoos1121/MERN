import React, { useState } from 'react';

const Login = (props) => {
    const {email, setEmail} = useState("");
    const {password, setPassword} = useState("");
    const [confirm, setConfirm] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);

    const createUser = (e) => {
    //prevents refresh and reset
    e.preventDefault();

    const newUser = {email, password};
    console.log("Hi There!", newUser);
    setEmail("");
    setPassword("");
    setConfirm("");
    }
    
return (
    <form onSubmit={ createUser }>
        <div className = "App">
        <div className = "Box">
            <label>Email</label>
            <input type="text" value={email} onChange= { (e) =>
            setEmail(e.target.value) } />
        </div>
        <div className = "Box">
            <label>Password</label>
            <input type={passwordShown ? "text" : "password"} value={password} onChange= { (e) =>
            setPassword(e.target.value) } />
        </div> 
        <div className = "Box">
            <label>Confirm Password</label>
            <input type={passwordShown ? "text" : "password"} value={confirm} onChange= { (e) =>
            setConfirm(e.target.value) } />
        </div>  
        </div>
    </form>
    );
}

export default Login;

