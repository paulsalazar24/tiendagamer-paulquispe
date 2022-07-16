import React from 'react'
import './App.css';
import {NavBar} from './layouts/NavBar';
// import {Container} from './layouts/Conteiner';
import Contact from './components/Contact';
import Ubicacion from './components/Ubicacion';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  
  return (
    <>
    <div className='App'>
    <BrowserRouter>
     <Routes >
        <Route path='/' element={<NavBar/>}>
            <Route index element={<ItemListContainer/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='ubicacion' element={<Ubicacion/>}/> 
        </Route>
    </Routes>
    </BrowserRouter>

    </div>
      
    </>
  );

}

export default App;
