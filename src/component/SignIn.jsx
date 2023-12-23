import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Login submitted:', loginData);
    // You can send the data to a server using Axios or fetch here
    // Optionally, you can reset the form
    setLoginData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="container mt-5">
      <h2>Sign In</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default App;
