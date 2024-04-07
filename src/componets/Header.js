import React from 'react';
import './Header.css';
import SearchIcon from '../images/Search.png'; 
import VectorIcon from '../images/Vector.png';
import RectangleIcon from '../images/Rectangle.png'; 
// import '../pages/MainPage'

function Header() {
  return (
    <div className="header">
      <h4 className='logo'>VEGAS BEAUTY</h4>
      <a href='/about' className='nav-item'>о нас</a>
      <a href='/katalog' className='nav-item'>Каталог</a>
      <a href='/otzyvy' className='nav-item'>Отзывы</a>
      <div className='header-end'>
      <a href='/search'><img src={SearchIcon} alt='Search' /></a>
      <a href='/like'><img src={VectorIcon} alt='Like' /></a> 
      <a href='/card'><img src={RectangleIcon} alt='Card' /></a> 
    </div></div>
  );
}

export default Header;
