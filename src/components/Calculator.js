import React, { useState } from 'react';
import ResultScreen from './ResultScreen';
import Button from './Button';
import ScientificMode from './ScientificMode'

function Calculator() {
    const [result, setResult] = useState(0);
    const [prevOperand, setPrevOperand] = useState();
    const [valList, setValList] = useState([]);
    const [sciMode, setSciMode] = useState(false);

    const calcKeyValues = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'Clear', '0', '=', '/'];
    const baseOperands = ['+', '-', '*', '/', 'Clear', '='];
    const scientificOperands = ['+/-', 'sq', 'sqrt'];

    const CalculatorOperations = {
        "/": (firstVal, secondVal) => secondVal ? firstVal / secondVal : firstVal,
        "*": (firstVal, secondVal) => secondVal ? firstVal * secondVal : firstVal,
        "+": (firstVal, secondVal) => firstVal + secondVal,
        "-": (firstVal, secondVal) => firstVal - secondVal,
        "=": (firstVal, secondVal) => secondVal || firstVal,
        "+/-": (firstVal) => firstVal ? - firstVal : 0,
        "sq": (firstVal) => Math.pow(firstVal, 2),
        'sqrt': (firstVal) => Math.sqrt(firstVal)
    };

    const sciCalculate = (operand) => {
        if (valList.length > 0) {
            const firstVal = Number(valList[0].join(''));
            const result = CalculatorOperations[operand](firstVal);
            setValList([[result], []])
            setResult(result);
        }
    }

    const calculate = (operand) => {
        if (operand === 'Clear') {
            setValList([])
            setResult(0);
            setPrevOperand();
            return;
        }
        if (valList.length > 1 && prevOperand) {
            const firstVal = Number(valList[0].join(''));
            let secondVal = Number(valList[1].join(''));
            if (valList.length > 2) {
                // for negative number scenarios
                secondVal = Number(valList[2].join(''));
            }
            const result = CalculatorOperations[prevOperand](firstVal, secondVal);
            setValList([[result], []])
            setResult(result);
        }
        setPrevOperand(operand);
    }

    // handler for every button click
    const handleOperation = (value) => {
        // For scientific mode calculations
        if (scientificOperands.includes(value)) {
            sciCalculate(value);
            return;
        }
        if (baseOperands.includes(value)) {
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
    }

    const showCurrentValue = (list) => {
        const lastVal = list[list.length - 1].join('');
        setResult(lastVal);
    }

    // Scientific Mode toggle Handler
    const handleScientificMode = () => {
        sciMode ? setSciMode(false) : setSciMode(true);
    }

    return (
        <div className="calculator">
            <div className="result-screen">
                <ResultScreen result={result} />
            </div>
            <div className="calculator-numbers">
                {calcKeyValues.map((keyValue) =>
                    <Button key={keyValue} className="button" keyValue={keyValue} clickHandler={handleOperation} />
                )}
            </div>
            <div>
                <ScientificMode keyValue={'Scientific Mode'} className="button" clickHandler={handleScientificMode} />
                {sciMode && <div>
                    {scientificOperands.map((keyValue) =>
                        <Button keyValue={keyValue} className="button" clickHandler={handleOperation} />
                    )}
                </div>}
            </div>
        </div>
    );
}

export default Calculator;