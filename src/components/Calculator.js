import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ResultScreen from './ResultScreen';
import Button from './Button';

Calculator.propTypes = {

};

function Calculator(props) {
    const [result, setResult] = useState(0);
    const [prevOperand, setPrevOperand] = useState();
    const [valList, setValList] = useState([]);

    useEffect(() => {

    }, []);


    const Operands = ['+', '-', '*', '/', 'Clear', '='];

    const CalculatorOperations = {
        "/": (firstVal, secondVal) => firstVal / secondVal,
        "*": (firstVal, secondVal) => firstVal * secondVal,
        "+": (firstVal, secondVal) => firstVal + secondVal,
        "-": (firstVal, secondVal) => firstVal - secondVal,
        "=": (firstVal, secondVal) => secondVal || firstVal
    };

    const calculate = (operand) => {
        if (operand === 'Clear') {
            setValList([])
            setResult(0);
            setPrevOperand();
            return;
        }
        if (valList.length > 1) {
            const firstVal = Number(valList[0].join(''));
            const secondVal = Number(valList[1].join(''));
            const result = CalculatorOperations[prevOperand](firstVal, secondVal);
            setValList([[result], []])
            setResult(result);
        }
        setPrevOperand(operand);
    }

    // handler for every button click
    const handleOperation = (value) => {
        if (Operands.includes(value)) {
            setValList([...valList, []]);
            calculate(value);
        } else {
            const newList = [...valList];
            if (!valList.length) {
                newList.push([])
            }
            newList[newList.length - 1].push(value);
            setValList(newList);
            showCurrentValue(newList);
        }
        // setResult(valList)
        console.log(valList);

    }

    const showCurrentValue = (list) => {
        const lastVal = list[list.length - 1].join('');
        setResult(lastVal);
    }


    const calcKeyValues = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'Clear', '0', '=', '/'];

    return (
        <div className="calculator">
            <div className="result-screen">
                <ResultScreen result={result} />
            </div>
            <div className="calculator-numbers">
                {calcKeyValues.map((keyValue) =>
                    <Button key={keyValue} keyValue={keyValue} clickHandler={handleOperation} />
                )}
            </div>
        </div>
    );
}

export default Calculator;