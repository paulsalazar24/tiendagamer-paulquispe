
import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <NavBar/>
        <section className='center'>
          <Routes>
            <Route path='/' element={<ItemListContainer saludo="LISTA DE PRODUCTOS"/>}/>
            <Route path='/categoria/:id' element={<ItemListContainer saludo="LISTA DE PRODUCTOS"/>}/>
            <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </section>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
