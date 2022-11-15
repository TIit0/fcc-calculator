import "./Calculator.css";
import Screen from "../Screen/Screen";
import Buttons from "../Buttons/Buttons";
import { useState } from "react";
import operationOrder from "../../utils/functions/operationOrder";

export default function Calculator() {

    const [currentOperation, setCurrentOperation] = useState("");
    const [greenLight, setGreenLight] = useState(false);
    const [history, setHistory] = useState("");

    let result = currentOperation ? currentOperation : "";
    const regexCalc = currentOperation.match(/\d+\.\d+|\d+|\-\d+|\d+|[^0-9]/g);
    let lastOne = regexCalc ? regexCalc[regexCalc.length - 1] : null;

        console.warn(regexCalc)
    if (currentOperation && currentOperation.includes("=")) {
        /* detect negative \d+\.\d+|\d+|\-\d+|\d+|[^0-9] */
        /* normal \d+\.\d+|\d+|[^0-9] */

        // if(result = operationOrder(regexCalc)) 
        result = operationOrder(regexCalc)
        console.log(result, "FUNC RESULT")

        

        
        if (!Number.isInteger(result) && isNaN(result)) {
            result = result.toFixed(2);
            const string = result.toString()
            if (string[string.length - 1] === "0") {
                result = parseFloat(result)
                result = result.toFixed(1)
            }
        }

        
        console.log(lastOne, "LastOne")

        if ((lastOne) === "=") {
            console.warn(currentOperation, "CURRENT OP BEFORE")
            setHistory(currentOperation)
            setGreenLight(true)
            setCurrentOperation(result.toString());
        }
        console.warn(currentOperation, "CURRENT OP AFTER")
        console.warn(history, "History AFTER")
    }

    
    if (history[history.length - 2] === "=") {
        setHistory(currentOperation);
    }


    console.error(result);
    result = result ? result : "0";
    console.error(result);
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