import React from "react";
import cl from "./Section.module.css";

const Section = (props) => {

    return (
        <div className={cl.section}>
            <p>{props.name}</p>
            <section className={cl.line_html}>
                <section skill-name={props.name.toLowerCase()} className={cl.line_html_color}></section>
            </section>
        </div>
    );
};

export default Section;