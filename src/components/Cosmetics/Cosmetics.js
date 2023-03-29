 
import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {

    const cosmetics = [
        {id: 1, name: 'Alta', price: 100},
        {id: 2, name: 'Malta', price: 200},
        {id: 3, name: 'Chalta', price: 300},
        {id: 4, name: 'Falta', price: 400},
        {id: 5, name: 'Lalta', price: 500},
    ]
    return (
        <div>
             <h1>Welocme to my react project</h1>
            {
                cosmetics.map( cosmetic => <Cosmetic key={cosmetic.id} ></Cosmetic> )
            }
        </div>
    );
};

export default Cosmetics;
 