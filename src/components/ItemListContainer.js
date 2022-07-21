import React from 'react';
import '../App.css';

function ItemListContainer({ saludo }) {
    return (
        <div className='container mt-4'>
            <h2>
                {saludo}
            </h2>
        </div>
    );
}

export {ItemListContainer};