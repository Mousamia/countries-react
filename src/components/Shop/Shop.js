import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Product';
const Shop = () => {
    const [products, setProduts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduts(data));
    }, []);

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        name={"biyebari"} >

                    </Products>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
            </div>

        </div>
    );
};

export default Shop;