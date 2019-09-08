import React from 'react';

import './App.css';
import Todo from './Todo';
import ProductList from './Component/ProductList';
import ProductList2 from './Component/ProductList2';

function App() {
  return (
    <div className="App">
      <Todo></Todo>
      <ProductList></ProductList>
      <ProductList2></ProductList2>
    
    </div>
  );
}

export default App;
