import React from 'react';

const Products = (props) => {
    console.log(props.product);

    const {id, quantity, img, name, category} = props.product;
    

    return (
        <div className='product'>
           <img src={img} alt="" />
           
            
        </div>
    );
};

export default Products;