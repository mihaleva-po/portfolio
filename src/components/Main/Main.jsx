import React from 'react';
import avatar from "../../images/avatar/IMG_4855.webp";
import cl from './Main.module.css';

const Main = () => {
    return (
        <main className={cl.main}>
            <h1>React frontend developer</h1>
            <div className={cl.mainPart}>
                <div>
                    <img alt={""} src={avatar}/>
                </div>

                <div className={cl.desk}>
                    <p>
                        Привет! Меня зовут Полина,
                        <br/>
                        я начинающий фронтенд-разработчик.
                        <br/>
                        На этом сайте представлены проекты,
                        <br/>
                        которые демонстрируют мои навыки
                        <br/>
                        в разработке веб-интерфейсов.
                    </p>
                </div>


            </div>

        </main>
    );
};

export default Main;