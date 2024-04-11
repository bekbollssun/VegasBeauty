import React from 'react';
import image44 from '../images/image44.png';
import image59 from '../images/image59.png'

  const cosmeticBasketStyles = {
    container: {
      backgroundColor: '#f2f2f2',
      padding: '2rem',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
        heading: {
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#333',
        },
        list: {
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        },
        item: {
          width: '40%',
          marginBottom: '2rem',
          backgroundColor: '#fff',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '1rem',
        },
        title: {
          fontSize: '1.2rem',
          color: '#333',
          marginBottom: '0.5rem',
        },
        price: {
          fontSize: '1rem',
          color: '#666',
          marginBottom: '1rem',
        },
        button: {
          padding: '0.5rem 1rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        },
        total: {
          fontSize: '1.2rem',
          color: '#333',
          fontWeight: 'bold',
          marginTop: '2rem',
        },
        orderButton: {
          marginTop: '2rem',
          backgroundColor: '#f44336',
        },
      }
    // ... rest of the styles

  const CosmeticBasket = () => {
  return (
    <div style={cosmeticBasketStyles.container}>
      <h1 style={cosmeticBasketStyles.heading}>Корзина косметики</h1>
      <ul style={cosmeticBasketStyles.list}>
        <li style={cosmeticBasketStyles.item}>
          <img src={image44} alt="Косметика" style={cosmeticBasketStyles.image} />
          <h2 style={cosmeticBasketStyles.title}>Косметика 1</h2>
          <p style={cosmeticBasketStyles.price}>Цена: 500 руб.</p>
          <button style={cosmeticBasketStyles.button}>Удалить</button>
          
        </li>
        <li style={cosmeticBasketStyles.item}>
          <img src={image59} alt="Косметика" style={cosmeticBasketStyles.image} />
          <h2 style={cosmeticBasketStyles.title}>Косметика 2</h2>
          <p style={cosmeticBasketStyles.price}>Цена: 700 руб.</p>
          <button style={cosmeticBasketStyles.button}>Удалить</button>
        </li>
      </ul>
      <p style={cosmeticBasketStyles.total}>Итого: 1200 руб.</p>
      <button style={cosmeticBasketStyles.orderButton}>Оформить заказ</button>
      
    </div>
    
  );
  }

export default CosmeticBasket;