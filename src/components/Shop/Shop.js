import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProduts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduts(data));
    }, []);
    console.log(cart);

    const addProductBtn = (product) =>{

        let newCart = [...cart, product];
        console.log(newCart);
        setCart(newCart);
        console.log(cart.length);
        
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        name={"biyebari"}
                        addProductBtn = {addProductBtn}
                         >

                    </Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;