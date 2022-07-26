import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'


function App(cantidad) {
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo="LISTA DE PRODUCTOS" />
    </>
  );
}

export default App;
