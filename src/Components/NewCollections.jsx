import React from 'react';
import '../Styles/Layouts/_newcollections.scss';
import new_collection from '../Assets/new_collections';
import Item from './Item';
import Title from './Title';

function NewCollections() {
    return (
        <div className='new-collections container'>
            <Title title={'NEW COLLECTIONS'}/>
            <div className="collections">
                {new_collection.map((item, i) => {
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

export default NewCollections;