import "./Calculator.css";
import Screen from "../Screen/Screen";
import Buttons from "../Buttons/Buttons";
import { useState } from "react";

export default function Calculator() {

    const [currentOperation, setCurrentOperation] = useState("");
    let result;


    if (currentOperation) {
        const regexCalc = currentOperation.match(/\d+\.\d+|\d+|[^0-9]/g);
        console.log(regexCalc)

        for (let i = 0; i < regexCalc.length; i++) {
            if (i === 0) {
                result = parseInt(regexCalc[i]);
            } else {
                if (!isNaN(regexCalc[i])) {
                    switch (regexCalc[i - 1]) {
                        case ("-"):
                            result -= parseInt(regexCalc[i]);
                            break;
                        case ("+"):
                            result += parseInt(regexCalc[i]);
                            break;
                        case ("*"):
                            result *= parseInt(regexCalc[i]);
                            break;
                        case ("/"):
                            result /= parseInt(regexCalc[i]);
                            break;
                    }
                }
            }
        }
        

    }

    result = result ? result : "0";

    return (
        <div className="Calculator">
            <Screen
                currentOperation={currentOperation}
                setCurrentOperation={setCurrentOperation}
                result={result} />

            <Buttons
                currentOperation={currentOperation}
                setCurrentOperation={setCurrentOperation} />
        </div>
    )
}