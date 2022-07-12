import React from 'react'
import './App.css';
import {NavBar} from './components/NavBar';
import logo from './logo.svg';


function App() {
  
  return (
    <>
     <NavBar/>
     <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>   
    </>
  );
}

export default App;
