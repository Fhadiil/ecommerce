import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import  axios from 'axios';
import toast from 'react-hot-toast';


const Register = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e)=>{
      e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/register/", formData)
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
    }

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleRegister}>
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
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        value={formData.email}
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
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  )
}

export default Register