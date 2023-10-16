import {useLayoutEffect} from "react";
import React from "react";

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';

export const useTheme = () => {

    const [theme, setTheme] = React.useState(localStorage.getItem('data-theme') || defaultTheme);

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('data-theme', theme)
    }, [theme]);

    return {theme, setTheme};
}
