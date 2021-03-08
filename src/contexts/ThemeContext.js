import React from 'react';

export const Themes = {
    light: 'light',
    dark: 'dark',
}

const ThemeContext = React.createContext({
    theme: Themes.light // given default context as 'light'
});

export default ThemeContext;

