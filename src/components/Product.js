import React from 'react';

const Product = ({product}) => {
    return (
        <div>
            <h2>Nume: {product.name}</h2>
            <p>pret: {product.price}</p>
            <p>culoare: {product.color}</p>
            <p>greutate: {product.weight}</p>
            <p>brand: {product.brand}</p>

        </div>
    );
};

export default Product;