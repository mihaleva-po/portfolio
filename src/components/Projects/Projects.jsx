import React from 'react';
import cl from './Projects.module.css';
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div>
            <h1>Мои проекты</h1>
            <Project/>
            <Project/>
            <Project/>

        </div>
    );
};

export default Projects;