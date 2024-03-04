import React from 'react';
import '../Styles/Layouts/_item.scss';
import { Link } from 'react-router-dom';

function Item(props) {
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <div className='item__prices'>
                <div className="item__prices-new">
                    ${props.new_price}
                </div>
                <div className="item__prices-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
};

export default Item;