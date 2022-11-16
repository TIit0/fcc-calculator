import "./Calculator.css";
import Screen from "../Screen/Screen";
import Buttons from "../Buttons/Buttons";
import { useState } from "react";
import operationOrder from "../../utils/functions/operationOrder";

export default function Calculator() {

    const [currentOperation, setCurrentOperation] = useState("");
    const [greenLight, setGreenLight] = useState(false);
    const [history, setHistory] = useState("");

    /*  feed current history and inputs to screen */
    let result = currentOperation ? currentOperation : "";
    const regexCalc = currentOperation.match(/-\d+\.\d+|\d+\.\d+|\d+|-\d+|\d+|[^0-9]/g);
    console.log(regexCalc, "REGEX CALC ARR")
        /* negative number detection + operator
        \d+\.\d+|\d+|\-\d+|\d+|[^0-9] 
         */
        /* negative detection and negative decimal  */
        /* /-\d+\.\d+|\d+\.\d+|\d+|-\d+|\d+|[^0-9]/g */
        /* need to detect negative with decimal aswell. */
        /* normal operator detection 
        \d+\.\d+|\d+|[^0-9]
         */

        /* feed last item of Array to Screen output screen */
    let LastInput = regexCalc ? regexCalc[regexCalc.length - 1] : null;

        console.warn(currentOperation, "current op", result, "result")
        console.warn(LastInput, "LAST ONE")

        /*  */
    if (currentOperation && currentOperation.includes("=")) {


        // if(result = operationOrder(regexCalc)) 
        result = operationOrder(regexCalc)
        console.log(result, "FUNC RESULT")

        

        
        if (!Number.isInteger(result) ) {
            result = result.toFixed(2);
            const string = result.toString()
            if (string[string.length - 1] === "0") {
                result = parseFloat(result)
                result = result.toFixed(1)
            }
        }

        
        console.log(LastInput, "LastInput")

        if ((LastInput) === "=") {
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
                LastInput={LastInput}
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