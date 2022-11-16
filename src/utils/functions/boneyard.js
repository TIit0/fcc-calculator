/*
if (currentOperation) {
        /* detect negative \d+\.\d+|\d+|\-\d+|\d+|[^0-9] */
        /* normal \d+\.\d+|\d+|[^0-9] */
        /*const regexCalc = currentOperation.match(/\d+\.\d+|\d+|\-\d+|\d+|[^0-9]/g);
        result = operationOrder(regexCalc);
        


        where for loop would be 
    } 
    */
/* for (let i = 0; i < regexCalc.length; i++) {

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
*/

















/*  OPERATION ORDER 
export default function operationOrder(regexCalc) {


    if (regexCalc.length == 1) return parseInt(regexCalc[0])
    if (!Array.isArray(regexCalc)) return regexCalc;
    if (!regexCalc.includes("=")) return regexCalc.toString();



    const arrCopy = [...regexCalc]
    console.log(arrCopy, "ARR COPY")

    /* re- do with loop to check from left to right for operators */
    /*
    let calculation
    if (arrCopy.includes("*")) {
        let index = arrCopy.indexOf("*")
        calculation = parseFloat(arrCopy[index - 1]) * parseFloat(arrCopy[index + 1]);
        arrCopy.splice(index - 1, 3, calculation)
        if (arrCopy.includes(NaN)) return NaN
        console.log(arrCopy, "AFTER SPLICE")
        console.log(calculation, "CALCULATION *")
        return operationOrder(arrCopy);
    }
    if (arrCopy.includes("/")) {
        let index = arrCopy.indexOf("/")
        calculation = parseFloat(arrCopy[index - 1]) / parseFloat(arrCopy[index + 1]);
        arrCopy.splice(index - 1, 3, calculation);
        if (arrCopy.includes(NaN)) return NaN
        console.log(arrCopy, "AFTER SPLICE")
        console.log(calculation, "CALCULATION /")
        return operationOrder(arrCopy);
    }
    if (arrCopy.includes("+")) {
        let index = arrCopy.indexOf("+")
        calculation = parseFloat(arrCopy[index - 1]) + parseFloat(arrCopy[index + 1]);
        arrCopy.splice(index - 1, 3, calculation);
        if (arrCopy.includes(NaN)) return NaN /* only op here due to + operator bheiviour with strings and nums */
        /*
        return operationOrder(arrCopy);
    }
    if (arrCopy.includes("-")) {
        let index = arrCopy.indexOf("-")
        calculation = parseFloat(arrCopy[index - 1]) - parseFloat(arrCopy[index + 1]);
        arrCopy.splice(index - 1, 3, calculation.toString())
        if (arrCopy.includes(NaN)) return NaN
        console.log(arrCopy, "AFTER SPLICE")
        console.log(calculation, "CALCULATION -")
        return operationOrder(arrCopy);
    }

    console.error("before loop")
    /*  handle negative numbers that do not have an opertor ie 1 -1 or -1 1   */ /*
    for (let i = 0; i < arrCopy.length; i++) {
        if (!isNaN(arrCopy[i]) && !isNaN(arrCopy[i + 1])) {
            calculation = parseFloat(arrCopy[i]) + parseFloat(arrCopy[i + 1]);
            arrCopy.splice(i, 2, calculation.toString())

            return operationOrder(arrCopy)
        }
        if (arrCopy.length == 2 && arrCopy[1] === "=") {
            return parseFloat(arrCopy[0])
        }
    }
    return calculation;
} */