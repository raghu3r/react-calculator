import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';
import ResultScreen from './ResultScreen';
import Button from './Button';

Calculator.propTypes = {
    
};

function Calculator(props) {
    const [prevVal, setPrevVal] = useState(0); 
    const [nextVal, setNextVal] = useState('');
    const [operation, setOperation] = useState();
    const [result, setResult ] = useState(0);

    // ComponentDidUpdate()
    useEffect(() => {}, [prevVal, nextVal, operation]);

    // handler for every button click
    const handleOperation = (value) => {
        setResult(value)
    }

    const calcKeyValues = ['1', '2', '3', 'Add (+)', '4', '5', '6', 'Substract (-)', '7', '8','9', 'Multiply (*)', 'Clear', '0', '=', 'Divide (/)'];

    return (
        <div className="calculator">
            <div className="result-screen">
                <ResultScreen result={result}/>
            </div>
            <div className="calculator-numbers">
                {calcKeyValues.map((keyValue) => 
                    <Button key={keyValue} keyValue={keyValue} clickHandler={handleOperation}/>
                )}
            </div>
        </div>
    );
}

export default Calculator;