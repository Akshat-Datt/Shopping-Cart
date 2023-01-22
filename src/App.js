import React, { useState } from 'react'
import Header from './components/Header';
import Body from './components/body';
import './index.css'
import Cart from './components/cart';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

    const detectClick = (item) => {
      if (cart.indexOf(item) !== -1) return;  
      setCart([...cart,item]);
    }

  return (
    <div>
      <Header setShow={setShow} size={cart.length}/>
      {show ? (<Body detectClick={detectClick}/>) : (<Cart cart={cart} setCart={setCart}/>)}
    </div>
  );
}

export default App;
