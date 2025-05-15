import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductApp from './components/ProductApp';
import reportWebVitals from './reportWebVitals';
import EventTest from './components/EventTest';
import Button from './components/EventHandle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ShoppingList />
      <Counter /> */}

    {/* <Square /> */}
    {/* <ProductApp /> */}
    {/* <EventTest /> */}
      <Button />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
