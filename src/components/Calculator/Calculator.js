import "./Calculator.css";
import Screen from "../Screen/Screen";
import Buttons from "../Buttons/Buttons";
import { useState } from "react";
import operationOrder from "../../utils/functions/operationOrder";

export default function Calculator() {

    const [currentOperation, setCurrentOperation] = useState("");
    const [isOverWrite, setIsOverWrite] = useState(false);
    const [history, setHistory] = useState("");


    let result = currentOperation ? currentOperation : "";

    const regexCalc = (
        currentOperation.match(/-\d+\.\d+|\d+\.\d+|\d+|-\d+|\d+|[^0-9]/g)
    );

    const lastInput = (
        regexCalc ? regexCalc[regexCalc.length - 1] : null
    );


    if (currentOperation && currentOperation.includes("=")) {
        result = operationOrder(regexCalc)


        if (!Number.isInteger(result)) {
            result = result.toFixed(2);
            const string = result.toString()
            if (string[string.length - 1] === "0") {
                result = parseFloat(result)
                result = result.toFixed(1)
            }
        }

        if ((lastInput) === "=") {
            console.warn(currentOperation, "CURRENT OP BEFORE")
            setHistory(currentOperation)
            setIsOverWrite(true)
            setCurrentOperation(result.toString());

        }
        console.warn(currentOperation, "CURRENT OP AFTER")
        console.warn(history, "History AFTER")
    }


    if (history[history.length - 2] === "=") {
        setHistory(currentOperation);
    }


    return (
        <div className="Calculator">
            <Screen
                currentOperation={currentOperation}
                setCurrentOperation={setCurrentOperation}
                result={result}
                lastInput={lastInput}
                history={history} />

            <Buttons
                currentOperation={currentOperation}
                setCurrentOperation={setCurrentOperation}
                isOverWrite={isOverWrite}
                setIsOverWrite={setIsOverWrite}
                setHistory={setHistory} />
        </div>
    )
}