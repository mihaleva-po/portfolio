import React from 'react';
import poster from '../../images/posterProject/counter.png';
import cl from './Converter.module.css';

const Img = () => {

    return (
        <div className={cl.poster}>
            <img alt={""} src={poster}/>

            <a href={"https://project-counter-phi.vercel.app/"}>Перейти к проекту!</a>

        </div>
    );
};

export default Img;