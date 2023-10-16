import React from 'react';
import cl from './Project.module.css';
import Img from "../../../Pet-project/Converter/Img";
import Discription from "../../../Pet-project/Converter/Discription";

const Project = () => {
    return (
        <div className={cl.project}>
            <div className={cl.description}>
                <Discription/>
            </div>
            {/*<div className={cl.poster}>*/}
                <Img/>
            {/*</div>*/}
        </div>
    );
};

export default Project;