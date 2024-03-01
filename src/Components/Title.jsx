import React from 'react';
import '../Styles/Layouts/_title.scss';

function Title({ title }) {
    return (
        <div className='section-title'>
            <h2>{title}</h2>
        </div>
    )
};

export default Title;