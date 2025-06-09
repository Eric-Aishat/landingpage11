
import React, {useState,useEffect} from 'react'

import Hero from './Hero'

import ABOUT from './page/ABOUT.jsx'
import BRANDS from './page/BRANDS.jsx'    
import DROPS from './page/DROPS.jsx'
import Nav from './Nav'
import { BrowserRouter,Routes,Route } from 'react-router'

import './App.css'
import CartPage from './page/Cartpage2'

function App() {
  

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  return (
    <BrowserRouter>
     <Nav cartCount={cart.length} cart={cart} setCart={setCart}/>
     <Routes>
      <Route path='/' element={<Hero/>}/> 
      
      <Route path='/brands'element={<BRANDS/>}/>
      <Route path='/about'element={<ABOUT/>}/>

      <Route path="/drops" element={<DROPS cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
      
     </Routes>
     
    </BrowserRouter>

  )

}

export default App
