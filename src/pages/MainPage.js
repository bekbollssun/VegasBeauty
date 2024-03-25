import React from 'react';
import { Carousel } from 'antd';
import ProductCard from "../componets/ProductCard";
import Header from "../componets/Header";
import productImage1 from '../images/kosmetik.jpg';
import productImage2 from '../images/kosmetik.jpg';
import productImage3 from '../images/kosmetik.jpg';

const MainPage = () => {
  const carouselStyle = {
    width: '70%',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  return (
    <div>
      <Header/>
      <Carousel autoplay style={carouselStyle}>
        {[productImage1, productImage2, productImage3].map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Product ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Carousel>
     
        
      </div>
  );
};

export default MainPage;
