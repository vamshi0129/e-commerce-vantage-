import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './index.css';
import Signin from './components/Signin.js';

import Registration from './components/Registration.js';
import Home from './Home.js';
import Electronics from './electronics.js';
import Clothes from './clothing.js';
import Toy from './toys.js';
import Footwear from './footwear.js';
import Pet from './pet.js';
import Beauty from './beauty.js';
import Furniture from './furniture.js';
import Health from './health.js';
import Cart from './Cart.js';
import Address from './Address.js';
import { CartProvider } from './components/CartContext.js';
import Payment from './components/Payment.js';
import Order from './components/Order.js';
import OrderHistory from './components/orderhistory.js';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Navigate to="/signin" />} /> {/* Redirect root to Signin */}
          <Route path="/home" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/clothing" element={<Clothes />} />
          <Route path="/toys" element={<Toy />} />
          <Route path="/footwear" element={<Footwear />} />
          <Route path="/pet" element={<Pet />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/health" element={<Health />} />
          <Route path="/address" element={<Address />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<Order />} /> {/* Add route for Order component */}
          <Route path="/orderhistory" element={<OrderHistory />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
