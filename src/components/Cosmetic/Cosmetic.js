import React from 'react';
import './cosmetic.css'

const Cosmetic = (props ) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = () =>{
        console.log("item added");
    }
    
    return (
        <div className='product'>
            <h3>Buy this: {name}</h3>   
            <h3>Buying Price: {props.cosmetic.price}</h3>
            <button onClick={addToCart}>Add to Cart</button>
            
        </div>
    );
};

export default Cosmetic;