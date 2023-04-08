import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(props.cart.length);
    let total = 0;
    for(let product of cart){
        console.log(product.price);
        total = total + product.price;

    }
    
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h3>Total Products: {props.cart.length} </h3>
            <h4>Total Price : {total} </h4>
        </div>
    );
};

export default Cart;