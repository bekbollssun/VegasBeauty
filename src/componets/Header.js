import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import logo from './logo.png';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const logoStyle = {
    width: '200px',
    height: 'auto',
    marginRight: '30px',
  };

  const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginRight: 'auto',
  };

  const linkStyle = {
    margin: '0 30px',
    color: '#333',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <div style={linkContainerStyle}>
        <a href="/" style={linkStyle}>Card</a>
        <a href="/shop" style={linkStyle}>Shop</a>
        <a href="/about" style={linkStyle}>About Us</a>
        <a href="/contact" style={linkStyle}>Contact</a>
        <a href="/cart" style={linkStyle}>Cart</a>
        <ShoppingCartOutlined style={{ fontSize: '24px', verticalAlign: 'middle' }} />
      </div>
    </div>
  );
};

export default Header;
