import React from 'react';
import '../componets/Header.css';
import Header from '../componets/Header';
import './MainPage.css';
import image59 from '../images/image59.png';
import image60 from '../images/image60.png';
import image61 from '../images/image61.png';
import image62 from '../images/image62.png';
import image44 from '../images/image44.png';
import Pipette from '../images/Pipette.png';
import Pepette2 from '../images/Pipette2.png';
import Pepette3 from '../images/Pipette3.png';
import Pepette4 from '../images/Pipette4.png';
import Pepette5 from '../images/Pipette5.png';
import P from '../images/P.png';
import { InstagramOutlined, WhatsAppOutlined, FacebookOutlined } from '@ant-design/icons';



const MainPage = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className='header-cont'>
      <Header />
      <h1 className='header-name'>Нежный уход за кожей <div> для вашей семьи </div></h1>
      <div className='header-image'>
        <img className='header-img2' src={image60} alt='Image60' />
        <img className='header-img' src={image59} alt='Image59' />
      </div>
      <div className='header-und'>
        <h4 className='header-text'>Мы — небольшая команда энтузиастов, которые верят в натуральные и экологически чистые <div>ингредиенты для сияющей и здоровой кожи. Мы посвящаем себя поиску лучших натуральных </div>продуктов по уходу за кожей.</h4>
        <button className='header-button' onClick={() => {window.location.href='/katalog'}}>В Каталог</button>
      </div>
      <div className='midle-img'>
        <div className='image-container'>
          <img src={image61} alt='Image61' />
          <span className='image-name'>Название изображения 1</span>
        </div>
        <div className='image-container'>
          <img src={image62} alt='Image62' />
          <span className='image-name'>Название изображения 2</span>
        </div>
        <div className='image-container'>
          <img src={image44} alt='Image44' />
          <span className='image-name'>Название изображения 3</span>
        </div>
      </div>

      <div className='midle'>
        <img className='Heder-Pipette' src={Pipette} alt='Pipette' />
        <h5 className='midle-text'>Натуральный уход <div>за кожей</div>
          <div className='midle-mini-text'> Наша миссия — помочь вам добиться <div> естественного и сияющего цвета лица за счет </div>использования высококачественных натуральных продуктов по уходу за кожей.</div>
          <button className='midle-button' onClick={handleClick}><a href='/katalog'>В каталог</a></button>
        </h5>
      </div>


      <div className='header-end'>
        <h4 className='end-text'> Питайте и защищайте свою <div className='under-text'>кожу с помощью наших <div className='product'>продуктов</div></div>  </h4>
      </div>

      <div className='product-grid'>
        <div className='product-card'>
          <img src={Pepette2} alt='Product 1' />
          <div className='product-info'>
            <span className='product-name'>Название товара 1</span>
            <span className='product-price'>$10.99</span>
            <button className='add-to-cart-button' onClick={handleClick}>Добавить в корзину</button>
          </div>
        </div>
        <div className='product-card'>
          <img src={Pepette3} alt='Product 2' />
          <div className='product-info'>
            <span className='product-name'>Название товара 2</span>
            <span className='product-price'>$15.99</span>
            <button className='add-to-cart-button' onClick={handleClick}>Добавить в корзину</button>
          </div>
        </div>
        <div className='product-card'>
          <img src={Pepette4} alt='Product 3' />
          <div className='product-info'>
            <span className='product-name'>Название товара 3</span>
            <span className='product-price'>$19.99</span>
            <button className='add-to-cart-button' onClick={handleClick}>Добавить в корзину</button>
          </div>
        </div>
        <div className='product-card'>
          <img src={image44} alt='Product 4' />
          <div className='product-info'>
            <span className='product-name'>Название товара 3</span>
            <span className='product-price'>$19.99</span>
            <button className='add-to-cart-button' onClick={handleClick}>Добавить в корзину</button>
          </div>
        </div>
        <div className='product-card'>
          <img src={Pepette5} alt='Product 5' />
          <div className='product-info'>
            <span className='product-name'>Название товара 3</span>
            <span className='product-price'>$19.99</span>
            <button className='add-to-cart-button' onClick={handleClick}>Добавить в корзину</button>
          </div>
        </div>
        <div className='product-card'>
          <img src={P} alt='Product 6' />
          <div className='product-info'>
            <span className='product-name'>Название товара 3</span>
            <span className='product-price'>$19.99</span>
            <button className='add-to-cart-button' onClick={handleClick}>Добавить в корзину</button>
          </div>
        </div>

        <div className='product-card'>
          <img src={image44} alt='Product 4' />
          <div className='product-info'>
            <span className='product-name'>Название товара 3</span>
            <span className='product-price'>$19.99</span>
            <button className='add-to-cart-button' onClick={handleClick}>Добавить в корзину</button>
          </div>
        </div>

        <div className='product-card'>
          <img src={image44} alt='Product 4' />
          <div className='product-info'>
            <span className='product-name'>Название товара 3</span>
            <span className='product-price'>$19.99</span>
            <button className='add-to-cart-button' onClick={handleClick}>Добавить в корзину</button>
          </div>
        </div>

        <div className='under-card-button'><button><a className='card-button' href='/card'>Больше карточек</a></button></div>

      </div>
      <hr className='hr' />
      <div className="header">
      <h4 className='logo2'>VEGAS BEAUTY</h4>
      <div className='end'>
        <a href='/about' className='nav-item'>о нас</a>
        <a href='/katalog' className='nav-item'>Каталог</a>
        <a href='/otzyvy' className='nav-item'>Отзывы</a>
      </div>
      
        <a href='/login'> <button className='profile-button'>Войти</button></a>
        <a href='/registration'><button className='profile-button'>Зарегистрироваться</button> </a>
      </div>
      <div className='social-icons'>
  <InstagramOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
  <WhatsAppOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
  <FacebookOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
</div>

    </div>
      

    
  );
}

export default MainPage;