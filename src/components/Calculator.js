import React, { useEffect, useState } from 'react';
import ResultScreen from './ResultScreen';
import Button from './Button';
import ScientificMode from './ScientificMode'

function Calculator(props) {
    const [result, setResult] = useState(0);
    const [prevOperand, setPrevOperand] = useState();
    const [valList, setValList] = useState([]);
    const [sciMode, setSciMode] = useState(false);

    useEffect(() => {

    }, []);

    const Operands = ['+', '-', '*', '/', 'Clear', '=', '+/-', 'sq', 'sqrt'];

    const CalculatorOperations = {
        "/": (firstVal, secondVal) => firstVal / secondVal,
        "*": (firstVal, secondVal) => firstVal * secondVal,
        "+": (firstVal, secondVal) => firstVal + secondVal,
        "-": (firstVal, secondVal) => firstVal - secondVal,
        "=": (firstVal, secondVal) => secondVal || firstVal,
        "+/-": (firstVal) => - firstVal,
        "sq": (firstVal) => Math.pow(firstVal, 2),
        'sqrt': (firstVal) => Math.sqrt(firstVal)
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
    }

    const showCurrentValue = (list) => {
        const lastVal = list[list.length - 1].join('');
        setResult(lastVal);
    }

    const handleScientificMode = () => {
        sciMode ? setSciMode(false) : setSciMode(true);
    }

    const calcKeyValues = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'Clear', '0', '=', '/'];

    const sciModeValues = ['+/-', 'sq', 'sqrt'];

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
                    {sciModeValues.map((keyValue) =>
                        <Button keyValue={keyValue} className="button" clickHandler={handleOperation} />
                    )}
                </div>}
            </div>
        </div>
    );
}

export default Calculator;