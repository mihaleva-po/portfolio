import React from 'react';
import cl from './Skills.module.css';
import Section from "./Section/Section";

const Skills = () => {
    return (
        <div className={cl.skills}>
            <h1>Мои навыки</h1>
            <div className={cl.skill}>
                <Section name={"HTML"}/>
                <Section name={"CSS"}/>
                <Section name={"JavaScript"}/>
                <Section name={"React"}/>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Skills;