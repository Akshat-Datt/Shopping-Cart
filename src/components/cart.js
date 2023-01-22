import React from 'react';

const Cart = ({cart, setCart}) => {

    const detectRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    }
    return (
        <article>
            {
                cart.map((item) => (
                    <div className='whole'>
                        <div className='product'>
                            <div className='back'>
                            <img src={item.image} alt="" className='src' />
                            </div>
                            <div className='details'>
                                <p className='bold'>{item.name}</p>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                            </div>
                        </div>
                        <div className='button'>
                            <button className='first' onClick={()=> detectRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
        </article>
    );
}

export default Cart;