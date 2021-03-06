import React from 'react';
import PropTypes from 'prop-types';

ResultScreen.propTypes = {
    
};

function ResultScreen(props) {
    return (
        <div>
            <p>{props.result}</p>
        </div>
    );
}

export default ResultScreen;