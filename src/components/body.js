import React, { useState } from 'react'
import list from '../data';
import Block from './block';

const Body = ({detectClick}) => {

    

    return(
        
        <section className='main'>
            {
                list.map((item) => (
                    <Block key={item.id} item={item} detectClick={detectClick}/>
                ))
            }
        </section>
    );
}
export default Body