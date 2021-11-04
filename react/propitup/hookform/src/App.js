import React, { useState } from 'react';
import './App.css';

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [email, setEmail] = useState("johnsmith@johnsmith.com");
  const [password, setPassword] = useState("password");
  const [confirm, setConfirm] = useState("password");
  const [passwordShown, setPasswordShown] = useState(false);

  const createUser = (e) => {
    //prevents refresh and reset
    e.preventDefault();

    const newUser = { firstName, lastName, email, password};
    console.log("Hi There!", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirm("");
  }
  return (
    <form onSubmit={ createUser }>
      <div className = "App">
        <div className = "Box">
          <label>First Name</label>
          <input type="text" value={firstName} onChange= { (e) =>
          setFirstName(e.target.value) } />
        </div>
        <div className = "Box">
          <label>Last Name</label>
          <input type="text" value={lastName} onChange= { (e) =>
        setLastName(e.target.value) } />
        </div>
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
          <input type={passwordShown ? "text" : "password"} value={password} onChange= { (e) =>
        setConfirm(e.target.value) } />
        </div>  
      </div>
      <div className="Typed">
        <h1>Your Form Data</h1>
        <p>First Name       {firstName}</p>
        <p>Last Name        {lastName}</p>
        <p>Email            {email}</p>
        <p>Password         {password}</p>
        <p>Password         {confirm}</p>
      </div>
    </form>
  
  );
}

export default UserForm;
