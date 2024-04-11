import React from 'react';
import { Input } from 'antd';
import './search.css';

const Search = () => {
  return (
    <div className="search-container">
      <Input.Search
        className="search-input"
        placeholder="Поиск"
        enterButton
      />
    </div>
  );
};

export default Search;