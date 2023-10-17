import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import img from './images/avatar/IMG_4904.webp';


function App() {


    return (
        <div className="App">

            <Header/>
            <Main/>
            <Skills/>
            {/*<Projects/>*/}



            <footer></footer>

        </div>
    )
}

export default App;
