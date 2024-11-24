import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Login = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/login/", formData)
            .then((response) => {
                console.log("Login successful:", response.data);
                // Store token in localStorage
                localStorage.setItem("token", response.data.token);
                toast.success('Login Successfully')
                navigate('/')
            })
            .catch((error) => {
              toast.error('error logging in')
              console.error("Login failed:", error)});
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;
