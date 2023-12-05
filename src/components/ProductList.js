import React from 'react';
import Product from './Product'; 

const ProductList = () => {
    const products = [
        { id: 1, name: 'Telefon', price: 1000 },
        { id: 2, name: 'Laptop', price: 2000 },
        { id: 3, name: 'Tableta', price: 500 },
    ];

    const productsWithColor = products.map(product => {
        return {...product, color: 'rosu'}; 
    });

    const cardStyle = {
        //backgroundColor: 'lightblue',
        border: '1px solid black',
        width: '200px',
        padding: '10px',
        borderRadius: '40px',
        position: 'absolute', 
        top: '95%',
        left: '10%', 
        transform: 'translate(-50%, -50%)',
        background: "linear-gradient(#fcba03, #9198e5)" 
      };
    

    return (
        <div style={cardStyle}>
            {productsWithColor.map(product => <Product key={product.id} product={product} />)}
        </div>
    );
};

export default ProductList;

