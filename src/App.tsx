import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "destyle.css";
import './App.scss';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          {/* 404 Redirects back to home page */}
          <Route path={"*"} element={<Navigate replace to={"/"}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
