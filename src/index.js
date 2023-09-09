import React from 'react';
import ReactDOM from 'react-dom/client';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Header } from './components/navbar/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ItemListContainer greeting="Stock todas las Categorias" />
  </React.StrictMode>
);

