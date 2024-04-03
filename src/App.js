import React from 'react';
import './App.css';
import {BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
