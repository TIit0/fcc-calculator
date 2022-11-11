

export default function operationOrder(regexCalc) {

    if (!Array.isArray(regexCalc)) return regexCalc;
    if (!regexCalc.includes("=")) return regexCalc;

    const arrCopy = [...regexCalc]
    console.log(arrCopy, "ARR COPY")

    let calculation
    if (arrCopy.includes("*")) {
        let index = arrCopy.indexOf("*")
        calculation = parseFloat(arrCopy[index -1 ]) * parseFloat(arrCopy[index + 1 ]);
        arrCopy.splice(index - 1, 3, calculation)
        console.log(arrCopy, "AFTER SPLICE")
        console.log(calculation, "CALCULATION *")
        operationOrder(arrCopy);
    }
    if (arrCopy.includes("/")) {
        let index = arrCopy.indexOf("/")
        calculation = parseFloat(arrCopy[index -1 ]) / parseFloat(arrCopy[index + 1 ]);
        arrCopy.splice(index - 1, 3, calculation)
        console.log(arrCopy, "AFTER SPLICE")
        console.log(calculation, "CALCULATION /")
        operationOrder(arrCopy);
    }
    if (arrCopy.includes("+")) {
        let index = arrCopy.indexOf("+")
        calculation = parseFloat(arrCopy[index -1 ]) + parseFloat(arrCopy[index + 1 ]);
        arrCopy.splice(index - 1, 3, calculation)
        console.log(arrCopy, "AFTER SPLICE")
        console.log(calculation, "CALCULATION +")
        operationOrder(arrCopy);
    }
    if (arrCopy.includes("-")) {
        let index = arrCopy.indexOf("-")
        calculation = parseFloat(arrCopy[index -1 ]) - parseFloat(arrCopy[index + 1 ]);
        arrCopy.splice(index - 1, 3, calculation.toString())
        console.log(arrCopy, "AFTER SPLICE")
        console.log(calculation, "CALCULATION -")
        operationOrder(arrCopy);
    }

    return calculation;
}





























/*


    return calculation;
*/






