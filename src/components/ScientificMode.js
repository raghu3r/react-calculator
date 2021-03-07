import React from 'react';

function ScientificMode({ keyValue, clickHandler, className }) {
    return (
        <>
            <button className={`${className}`} onClick={() => clickHandler(keyValue)}>
                {keyValue}
            </button>
        </>
    );
}

export default ScientificMode;