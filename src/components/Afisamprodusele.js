import React, { useEffect } from 'react';

const Afisamprodusele = () => {
  const products = [
    { name: 'Telefon', price: 1000 },
    { name: 'Laptop', price: 2000 },
    { name: 'Tableta', price: 500 },
  ];

  useEffect(() => {
    products.forEach(product => console.log(`Nume: ${product.name}, Pret: ${product.price}`));
  }, []);

};

export default Afisamprodusele;
