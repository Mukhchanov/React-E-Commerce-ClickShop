import React from 'react';
import '../Styles/Layouts/_relatedproducts.scss';
import data_product from '../Assets/data';
import Item from '../Components/Item';
import Title from './Title';

function RelatedProducts() {

    return (
        <div className='relatedproducts'>
            <Title title={'Related Products'} />
            <div className='relatedproducts__item'>
                {data_product.map((item, i) => {
                    return <Item key={i} 
                    id={item.id} 
                    name={item.name} 
                    image={item.image} 
                    new_price={item.new_price} 
                    old_price={item.old_price}  />
                })}
            </div>
        </div>
    )
};

export default RelatedProducts;