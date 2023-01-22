import React from 'react'
import '../index.css'

const Header = ({setShow}) => {
    return(
        <div className='bar'>
             <div>
                <h2 className="head" onClick={()=>setShow(true)}>Shopping Cart</h2>
             </div>
             <div className='cart' onClick={()=>setShow(false)}>
                <span className="icon">
                    <i class="fa-solid fa-shopping-cart"></i>
                </span>
             </div>
        </div>
    );
}

export default Header