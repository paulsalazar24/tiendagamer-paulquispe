import logo from './logo.svg';
import './App.css';
import {NavBar} from './layouts/NavBar';
import {ItemListContainer} from './components/ItemListContainer'
import {ItemCount} from './components/ItemCount'

function App(cantidad) {

  const agregarCarrito = (cantidad) => {
    console.log(`Agregaste ${cantidad} al carrito`)
  }



  return (
    <>
    <NavBar/>
    <ItemListContainer saludo="Hola este es mi lista de productos" />
    <ItemCount stock={20} initial={1} agregarCarrito={agregarCarrito}/>
    </>
  );
}

export default App;
