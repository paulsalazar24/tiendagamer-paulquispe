import React from 'react';
import '../App.css';

function ItemListContainer({ saludo }) {
    return (
        <div className='container mt-4'>
            <p>
                {saludo}
            </p>
        </div>
    );
}

export {ItemListContainer};