import "./Calculator.css";
import Screen from "../Screen/Screen";
import Buttons from "../Buttons/Buttons";
import { useState } from "react";

export default function Calculator() {

    const [currentOperation, setCurrentOperation] = useState("");
    const [prev, setPrev] = useState("")
    
    let result;
    let lastOne;


    if (currentOperation) {
        /* detect negative \d+\.\d+|\d+|\-\d+|\d+|[^0-9] */
        /* normal \d+\.\d+|\d+|[^0-9] */
        const regexCalc = currentOperation.match(/\d+\.\d+|\d+|[^0-9]/g);
        console.log(regexCalc)

        for (let i = 0; i < regexCalc.length; i++) {
            
            if (i === 0) {
                result = parseFloat(regexCalc[i]);
                console.log(result)
            } else {
                
                if (!isNaN(regexCalc[i])) {
                    switch (regexCalc[i - 1]) {
                        case ("-"):
                            result -= parseFloat(regexCalc[i]);
                            break;
                        case ("+"):
                            result += parseFloat(regexCalc[i]);
                            break;
                        case ("*"):
                            result *= parseFloat(regexCalc[i]);
                            break;
                        case ("/"):
                            result /= parseFloat(regexCalc[i]);
                            break;
                        
                    }
                }
            }
        }
        if (!Number.isInteger(result)) {
            result = result.toFixed(2);
            const string = result.toString()
            if( string[string.length - 1] === "0") {
                result = parseFloat(result)
                result = result.toFixed(1)
            }
            
        }
        
        lastOne = regexCalc[regexCalc.length - 1];
        if ((regexCalc[regexCalc.length - 1]) === "=") {
        setCurrentOperation(result.toString())
        }
    }

    result = result ? result : "0";

    return (
        <div className="Calculator">
            <Screen
                currentOperation={currentOperation}
                setCurrentOperation={setCurrentOperation}
                result={result}
                lastOne={lastOne} />

            <Buttons
                currentOperation={currentOperation}
                setCurrentOperation={setCurrentOperation} />
        </div>
    )
}