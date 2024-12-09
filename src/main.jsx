import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './Context/Carts';
createRoot(document.getElementById('root')).render(
<CartProvider>
<App />
</CartProvider>

);
