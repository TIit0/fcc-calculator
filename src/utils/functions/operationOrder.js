

export default function operationOrder(regexCalc) {

    if (regexCalc.length === 1) return parseInt(regexCalc[0])
    if (!Array.isArray(regexCalc)) return regexCalc;
    if (!regexCalc.includes("=")) return regexCalc.toString();



    const arrCopy = [...regexCalc]
    console.log(arrCopy, "ARR COPY")

    /* re- do with loop to check from left to right for operators */
    let calculation
    for (let i = 0; i < arrCopy.length; i++) {
        if (arrCopy[i] === "*") {
            
            calculation = (
                parseFloat(arrCopy[i - 1]) * parseFloat(arrCopy[i + 1])
                );
            arrCopy.splice(i - 1, 3, calculation)
            if (arrCopy.includes(NaN)) return NaN
            return operationOrder(arrCopy);
        }

        if (arrCopy[i] === "/") {
            
            calculation = (
                parseFloat(arrCopy[i - 1]) / parseFloat(arrCopy[i + 1])
                );
            arrCopy.splice(i - 1, 3, calculation);
            if (arrCopy.includes(NaN)) return NaN
            return operationOrder(arrCopy);
        }
    }

    if (arrCopy.includes("+")) {
        let index = arrCopy.indexOf("+")
        calculation = (
            parseFloat(arrCopy[index - 1]) + parseFloat(arrCopy[index + 1])
        );
        arrCopy.splice(index - 1, 3, calculation);
        if (arrCopy.includes(NaN)) return NaN; 
        
        return operationOrder(arrCopy);
    }
    /*  handle negative numbers that do not have an opertor ie 1 -1 or -1 1   */
    for (let i = 0; i < arrCopy.length; i++) {
        if (!isNaN(arrCopy[i]) && !isNaN(arrCopy[i + 1])) {
            calculation = (
                parseFloat(arrCopy[i]) + parseFloat(arrCopy[i + 1])
            );
            arrCopy.splice(i, 2, calculation.toString())

            return operationOrder(arrCopy)
        }
        if (arrCopy.length === 2 && arrCopy[1] === "=") {
            return parseFloat(arrCopy[0])
        }
    }

    calculation = (calculation === undefined) ? NaN : calculation;
    return calculation;
}
