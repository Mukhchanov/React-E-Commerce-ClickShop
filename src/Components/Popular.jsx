import React from 'react';
import '../Styles/Layouts/_popular.scss';
import data_product from '../Assets/data';
import Item from './Item';

function Popular() {
    return (
        <div className='popular container'>
            <h1>POPULAR IN WOMEN</h1>
            <div className='popular__item'>
                {data_product.map((item, i) => {
                    return <Item key={i} 
                    id={item.id} 
                    name={item.name} 
                    image={item.image} 
                    new_price={item.new_price} 
                    old_price={item.old_price} />
                })}
            </div>
        </div>
    )
};

export default Popular;