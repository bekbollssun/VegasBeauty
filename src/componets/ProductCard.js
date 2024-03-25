import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import product1Image from '../images/download.png'; 

function ProductCard(props) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '300px',
    margin: '10px',
    position: 'relative',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
    transition: 'transform 0.3s ease',
    overflow: 'hidden', 
    backgroundColor: '#fff', 
    borderRadius: '10px', 
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0', 
  };

  const contentStyle = {
    padding: '10px',
  };

  const cartIconStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    color: '#1890ff',
    cursor: 'pointer',
  };

  const handleAddToCart = () => {
    console.log('Product added to cart:', props.name);
  };

  return (
    <div style={cardStyle}>
      <img src={props.image} alt={props.name} style={imageStyle} />
      <div style={contentStyle}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>Price: ${props.price}</p>
        <button onClick={handleAddToCart} style={{ padding: '8px 16px', borderRadius: '5px', border: 'none', backgroundColor: '#1890ff', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Add to Cart</button>
      </div>
      <ShoppingCartOutlined style={cartIconStyle} onClick={handleAddToCart} />
    </div>
  );
}

function ProductList() {
  const products = [
    { 
      id: 1, 
      name: 'Product 1', 
      description: 'Description 1', 
      price: 10, 
      image: product1Image 
    },
    { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      }, { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      },
      { 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      },{ 
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 10, 
        image: product1Image 
      },
    
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;
