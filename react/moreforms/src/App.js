import React, { useState } from 'react';
import './App.css';

const UserForm = (props) => {
  const [firstNameValidation, setFirstNameValidation] = useState(""); 
  const [lastNameValidation, setLastNameValidation] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");
  const [confirmValidation, setConfirmValidation] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <form>
      <div className = "App">
        <div className = "Box">
          <label>First Name</label>
          <input type="text" onChange= { (e) => {
            if (e.target.value.length < 2 && e.target.value.length > 0) {
              setFirstNameValidation('field must be at least 2 characters');           
            }
            else setFirstNameValidation('');            
          }} />
          <p>{firstNameValidation}</p>          
        </div>
        <div className = "Box">
          <label>Last Name</label>
          <input type="text" onChange= { (e) => {
        if (e.target.value.length < 2 && e.target.value.length > 0) {
          setLastNameValidation('field must be at least 2 characters');           
        }
        else setLastNameValidation('');            
          }} />
      <p>{lastNameValidation}</p>   
        </div>
        <div className = "Box">
          <label>Email</label>
          <input type="text" onChange= { (e) => {
        if (e.target.value.length < 5 && e.target.value.length > 0) {
          setEmailValidation('field must be at least 5 characters');           
        }
        else setEmailValidation('');            
          }} />
      <p>{emailValidation}</p> 
        </div>
        <div className = "Box">
          <label>Password</label>
          <input type={passwordShown ? "text" : "password"} onChange= { (e) => {
        if (e.target.value.length < 8 && e.target.value.length > 0) {
          setPasswordValidation('field must be at least 8 characters');           
        }
        else setPasswordValidation('');            
          }} />
      <p>{passwordValidation}</p> 
        </div> 
        <div className = "Box">
          <label>Confirm Password</label>
          <input type={passwordShown ? "text" : "password"} onChange= { (e) => {
        if (e.target.value.length < 8 && e.target.value.length > 0) {
          setConfirmValidation('field must be at least 8 characters');           
        }
        if (setConfirmValidation !== setPasswordValidation & e.target.value.length < 8 && e.target.value.length > 0) {
          setConfirmValidation('passwords must match');
        }
        else setConfirmValidation('');            
          }} />
      <p>{confirmValidation}</p> 
        </div>  
      </div>
    </form>
  
  );
}

export default UserForm;
