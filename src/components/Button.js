import React from 'react';

function Button({ className, keyValue, clickHandler }) {
    return (
        <button className={`${className}`} onClick={() => clickHandler(keyValue)}>
            {keyValue}
        </button>
    );
}

export default Button;