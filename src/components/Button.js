import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {

};

function Button({ className, keyValue, clickHandler }) {
    return (
        <button className={`${className}`} onClick={() => clickHandler(keyValue)}>
            {keyValue}
        </button>
    );
}

export default Button;