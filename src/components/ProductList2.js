import React from 'react';
import Product from './Product'; 

const ProductList2 = () => {
    const products = [
        { id: 1, name: 'Casti', price: 100, color: 'black', weight: '0.2kg' },
        { id: 2, name: 'Mouse', price: 50, color: 'gray', weight: '0.1kg' },
        { id: 3, name: 'Tastatura', price: 200, color: 'white', weight: '0.5kg' },
    ];

    const updatedProducts = [...products];
    updatedProducts[1] = { 
        ...updatedProducts[1], 
        name: 'Laptop',
        price: 2000,
        color: 'silver',
        weight: '2kg',
        brand: 'Samsung', 
    };

    const cardStyle = {
        //backgroundColor: 'lightgreen',
        border: '1px solid black',
        width: '200px',
        padding: '10px',
        borderRadius: '40px',
        position: 'absolute', 
        top: '170%',
        left: '10%', 
        transform: 'translate(-50%, -50%)',
        background: "linear-gradient(#fc0335, #00cc10)" 

      };

    return (
        <div style={cardStyle}>
            {updatedProducts.map(product => <Product key={product.id} product={product} />)}
        </div>
    );
};

export default ProductList2;
