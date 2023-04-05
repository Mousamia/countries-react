import React from 'react';
import './Product.css';

const Products = (props) => {
    // console.log(props.product);
    const addProductBtn = props.addProductBtn;

    const {id, quantity, img, name, category} = props.product;
    

    return (
        <div className='product'>
           <img src={img} alt="" />
           <h3>Product Name: {name} </h3>
           <p>Product Id: {id}</p>
           <p>Product Name: {name}</p>
           <p>Product Category: {category} </p>
           <button onClick={ () => addProductBtn(props.product)}> Add to cart </button>
           
            
        </div>
    );
};

export default Products;