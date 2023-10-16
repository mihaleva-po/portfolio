import React from "react";
import sun from "../../images/themas/sun.png";
import moon from "../../images/themas/moon.png";
import {useTheme} from "../../hooks/useTheme";
import cl from './Header.module.css';

const Header = () => {

    const {theme, setTheme} = useTheme();

    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return (
        <header className={cl.header}>
            <h1>Polina Mihaleva</h1>
            <div className={cl.header_right}>
                <nav className={cl.nav}>
                    <a href="#"/> Главная
                    <a href="#"/> Проекты
                    <a href="#"/> Контакты
                </nav>
                <img onClick={changeTheme} className={theme === 'light' ? cl.hidden : undefined} alt={""}
                     src={sun}/>
                <img onClick={changeTheme} className={theme === 'dark' ? cl.hidden : undefined} alt={""} src={moon}/>
            </div>
        </header>
    )
}

export default Header;