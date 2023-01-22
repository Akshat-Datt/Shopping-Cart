import React from 'react'

const Block = ({item, detectClick}) => {
    const {id, name, description, price, image} = item;
    return(
        <div className='container'>
                <div className='img'>
                    <img src={image} alt="" />
                </div>
                <div className='props'>
                    <p className='bold'>{name}</p>
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
                <div className='btn'>
                    <button className='first' onClick={()=>detectClick(item)}>ADD TO CART</button>
                </div>
        </div>
    );
}

export default Block