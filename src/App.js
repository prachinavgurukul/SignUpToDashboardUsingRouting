import './App.css';
import Dashboard from './component/Dashboard';
import Signup from './component/Signup';
import {Link,Route,Routes, useNavigate} from 'react-router-dom'
import { useState } from 'react';
function App() {
  return (
    <>
    <Link to="/Dashboard">Dashboard</Link>
    <Link to="/Signup"> Signup</Link>
    <Routes>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
    </Routes>
    </>  
  );
}
export default App;


