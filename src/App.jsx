import React from 'react';
import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './component/Home'
import SignUp from './component/SignUp';
import SignIn from './component/SignIn'



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signup'element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />       

        </Routes>
      </div>
    </Router>
  );
}

export default App;
