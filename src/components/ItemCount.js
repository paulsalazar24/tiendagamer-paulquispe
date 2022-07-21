import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemCount';
import { useState } from 'react';


const ItemCount = ({stock, initial, agregarCarrito}) =>{
const [count, setCount] = useState(initial);
    const aumentar = () =>{
        if(count < stock){
            setCount(count + initial);
        }
    };
    
    const restar = () =>{
        if(count > initial){
            setCount(count - initial);
            console.log(setCount)
        }
    };

    return (

        <div className='container col-12'>
        <div className='col-12'>
         <Button className='mr-8' onClick={restar}>-</Button>  
         {count}  
        <Button className=' ml-8' onClick={aumentar}>+</Button>
        </div>
        <div className='carrito mt-2'>
        <Button onClick={()=>agregarCarrito(count)}>Comprar</Button>
        </div>
     </div>
        
      );
}

export {ItemCount}  