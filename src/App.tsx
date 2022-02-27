import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "destyle.css";
import './App.scss';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
