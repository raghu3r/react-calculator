import React from 'react';
import { Themes } from '../contexts/ThemeContext';

function ThemeTogglerButton({ className, clickHandler }) {

    return (
        <div>
            <button className={`${className}`} onClick={() => clickHandler(Themes.light)}>
                Light Theme
            </button>
            <button className={`${className}`} onClick={() => clickHandler(Themes.dark)}>
                Dark Theme
            </button>
        </div>
    );
}

export default ThemeTogglerButton;