import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemCount';
import { useState } from 'react';
import './ItemCount.css'


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
        <>
    
        <div className='carrito col-12'>
            <div className='marco'>
                <div className='cont-dato'>
                    <Button  className='btn-restar' onClick={restar}>-</Button>  
                    <p>{count} </p> 
                    <Button className='btn-sumar' onClick={aumentar}>+</Button>
                </div>
                <div className='carrito mt-2'>
                    <Button className='btn-agregar btn success' onClick={()=>agregarCarrito(count)}>Agregar al carrito</Button>
                </div>
            </div>
        </div>
        
        
        </>
      );
}

export {ItemCount}  