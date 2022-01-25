import React, { useState } from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const Register = (props) => {
    const [confirm, setConfirm] = useState("");
    const [errors, setErrors] = useState({});
    const [confirmReg, setConfirmReg] = useState("");

    const [user, setUser] = useState({
        username: "",
        email: "",
        password:"",
        confirmPassword:"",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const register = (e) => (
        e.preventDefault(),
        axios
            .post(
                "http://localhost:8000/api/users/register",
                user,
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                console.log("res.data");
                setUser({
                    username: "",
                    email: "",
                    password:"",
                    confirmPassword:"",
                });
                setConfirmReg(
                    "Thank you for registering. You can now log in!"
                );
                setErrors({});
                })
                .catch((err) => {
                    console.log(err);
                    setErrors(err.response.data.errors);
                })
    )
        

    return (
        <div className="sf_container mt-3 container-md border border-primary bg-light p-5">
            <h2 className="text-primary">Register</h2>
            <form onSubmit={register}>
                <div className="row mb-3 mt-5">
                    <label for="inputname3" className="col-sm-2 col-form-label text-primary">Email</label>
                    <div className="col-sm-10">
                        <input type="email" name="email" className="form-control" id="inputEmail3" value={user.email} onChange={(e) =>
                        handleChange(e)} />
                        {errors.email ? <p className="text-danger">{errors.email.message}</p> : null}
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label text-primary">Username</label>
                    <div className="col-sm-10">
                        <input type="text" name="username" className="form-control" value={user.username} onChange={(e) =>
                        handleChange(e)} />
                        {errors.username ? <p className="text-danger">{errors.username.message}</p> : null}
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label text-primary">Password</label>
                    <div className="col-sm-10">
                        <input type="password" name="password" className="form-control" value={user.password} onChange={(e) =>
                        handleChange(e)} />
                        {errors.password ? <p className="text-danger">{errors.password.message}</p> : null}
                    </div>
                </div> 
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label text-primary">Confirm</label>
                    <div className="col-sm-10">
                        <input type="password" name="confirmPassword" className="form-control" value={user.confirmPassword} onChange={(e) =>
                        handleChange(e)} />
                        {errors.confirmPassword ? <p className="text-danger">{errors.confirmPassword.message}</p> : null}
                    </div>
                </div>
                <div className="regSubmit">
                    <button type="submit" className="btn btn-primary mx-3 mt-3">Register</button>
                    <Link className="btn btn-primary mt-3" to={"/LogReg"}>Back To Login</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;