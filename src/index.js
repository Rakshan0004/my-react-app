import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ProductApp from './components/ProductApp';
import EventTest from './components/EventTest';
import Button from './components/EventHandle';
import Ninja from './components/Ninja.jsx';
import { BrowserRouter } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
    {/* <ShoppingList />
      <Counter /> */}

    {/* <Square /> */}
    {/* <ProductApp /> */}
    {/* <EventTest /> */}
    {/* <Button /> */}
    {/* <Ninja /> */}
  </React.StrictMode>
);

