// import React from 'react';
import React from 'react';
import './Header.css';
import SearchIcon from '../images/Search.png'; 
import VectorIcon from '../images/Vector.png';
import RectangleIcon from '../images/Rectangle.png'

const ProductCard = ({ product }) => {
    return (
        <div>
            <div className="header">
      <h4 className='logo'>VEGAS BEAUTY</h4>
      <a href='/about' className='nav-item'>о нас</a>
      <a href='/katalog' className='nav-item'>Каталог</a>
      <a href='/otzyvy' className='nav-item'>Отзывы</a>
      <div className='header-end'>
      <a href='/search'><img src={SearchIcon} alt='Search' /></a>
      <a href='/like'><img src={VectorIcon} alt='Like' /></a> 
      <a href='/cart'><img src={RectangleIcon} alt='Card' /></a> 
    </div></div>
    <hr/>
        </div>
    )
};

export default ProductCard;