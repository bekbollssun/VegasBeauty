import ProductCard from "../componets/ProductCard";
import React from 'react';
import { Button, Flex } from 'antd';
import { Space, Typography } from 'antd';

function MainPage () {

const { Text, Link } = Typography;
const Button = () => {
    const buttonStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50px',
      height: '50px',
      borderRadius: '10px',
      border: 'none',
      backgroundColor: 'transparent',
      position: 'relative',
    };
  
    const iconStyle = {
      width: '30px',
      height: '30px',
      transition: '0.2s linear',
    };
  
    const afterStyle = {
      content: 'like',
      width: 'fit-content',
      height: 'fit-content',
      position: 'absolute',
      fontSize: '15px',
      color: 'white',
      fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
      opacity: '0',
      visibility: 'hidden',
      transition: '0.2s linear',
      top: '115%',
    };
  
    const hoverStyle = {
      transform: 'scale(1.2)',
    };
  
    const hoverIconStyle = {
      fill: 'rgb(177, 139, 189)',
      transition: '0.2s linear',
    };
  
    const hoverAfterStyle = {
      visibility: 'visible',
      opacity: '1',
      top: '105%',
    };
    return (
        <Flex vertical gap="small" style={{ width: '5%' , left:'800px'}}>
        <Button type="Бишкек" block>
        <Space direction="vertical">
        <Text>Бишкек  </Text>
        </Space>
      </Button>
      <button className="btn">
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
      </Flex>
    )
}
}


export default MainPage;
