import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './styles/bootstrap.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/responsive.css';
import './styles/ui.css';
// import Navbar from './component/ui/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './component/Layout/MainLayout';
import Home from './component/home/Home';
import StoreSection from './component/store/StoreSection';
import NotFoundPage from './component/ui/NotFoundPage';
import ProductPage from './component/product/ProductPage';
import api from './api';
import { CartContext } from './context/CartContext';
import CartPage from './component/cart/CartPage';


const App = () => {
  const cart_code = localStorage.getItem('cart_code');
  const [numberOfItems, setNumberOfItems] = useState(0);

  useEffect(function (){
    api.get(`/cart/get_num_of_items?cart_code=${cart_code}`)
    .then(res => {
      // console.log(res.data)
      setNumberOfItems(res.data.num_of_items)
      // console.log(res.data.num_of_items)
    })
    .catch(err => {
      console.log(err.message)
    })
  }, [])
  return (
    <CartContext.Provider value={{ numberOfItems, setNumberOfItems }}> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/store' element={<StoreSection />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/store/:category_slug' element={<StoreSection />} />
            <Route path='/store/:category_slug/:product_slug' element={<ProductPage />} />
            <Route path='cart' element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App