import "./Calculator.css";
import Screen from "../Screen/Screen";
import Buttons from "../Buttons/Buttons";
import { useState } from "react";

export default function Calculator() {

    const [currentOperation, setCurrentOperation] = useState("");
    const [greenLight, setGreenLight] = useState(false);
    const [history, setHistory] = useState("");

    let result;
    let lastOne;


    if (currentOperation) {
        /* detect negative \d+\.\d+|\d+|\-\d+|\d+|[^0-9] */
        /* normal \d+\.\d+|\d+|[^0-9] */
        const regexCalc = currentOperation.match(/\d+\.\d+|\d+|\-\d+|\d+|[^0-9]/g);
        console.log(regexCalc, "REGEX")

        
        // if ( regexCalc.includes("*") || regexCalc.includes("/")) {
            
        // }
        for (let i = 0; i < regexCalc.length; i++) {

            console.error(regexCalc[i], "REGEX CALC [i]")
            if (i === 0) {
                result = parseFloat(regexCalc[i]);
                console.log(result, "ParseFloat")
            } else {

                if (
                    (Math.sign(regexCalc[i - 1]) &&
                    Math.sign(regexCalc[i]) ===
                    -1)) {
                        result += parseFloat(regexCalc[i]);
                        console.warn(result, "NEGATIVE RESULT")
                        console.error(regexCalc[i - 1], regexCalc[i])
                        console.warn(regexCalc, "NEGATIVE CALC")
                    }

                if (!isNaN(regexCalc[i])) {
                    switch (regexCalc[i - 1]) {
                        case ("*"):
                            result *= parseFloat(regexCalc[i]);
                            break;
                        case ("/"):
                            result /= parseFloat(regexCalc[i]);
                            break;
                        case ("+"):
                            result += parseFloat(regexCalc[i]);
                            break;
                        case ("-"):
                            result -= parseFloat(regexCalc[i]);
                            break;

                    }
                }
            }
        }
        if (!Number.isInteger(result)) {
            result = result.toFixed(2);
            const string = result.toString()
            if (string[string.length - 1] === "0") {
                result = parseFloat(result)
                result = result.toFixed(1)
            }

        }

        lastOne = regexCalc[regexCalc.length - 1];
        console.log(lastOne, "LastOne")

        if ((lastOne) === "=") {
            console.warn(currentOperation, "CURRENT OP BEFORE")
            setHistory(currentOperation)
            setGreenLight(true)
            setCurrentOperation(result.toString());
        }
        console.warn(currentOperation, "CURRENT OP AFTER")
        console.warn(history, "History AFTER")

        if (history[history.length - 2] === "=") {
            setHistory(currentOperation);
        }
    }



    result = result ? result : "0";

    return (
        <div className="Calculator">
            <Screen
                currentOperation={currentOperation}
                setCurrentOperation={setCurrentOperation}
                result={result}
                lastOne={lastOne}
                history={history} />

            <Buttons
                currentOperation={currentOperation}
                setCurrentOperation={setCurrentOperation}
                greenLight={greenLight}
                setGreenLight={setGreenLight}
                setHistory={setHistory} />
        </div>
    )
}