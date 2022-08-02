
import './App.css';
import {NavBar} from './components/NavBar/NavBar';
// import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App(cantidad) {
  return (
    <>
    <NavBar/>
    {/* <ItemListContainer saludo="LISTA DE PRODUCTOS" /> */}
    <ItemDetailContainer />
    </>
  );
}

export default App;
