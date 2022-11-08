

export default function operationOrder(regexCalc) {

    let calculation
    if(regexCalc.includes("*")) {
        let index = regexCalc.indexOf("*")
        calculation = regexCalc[index -1 ] * regexCalc[index + 1 ];
        console.log(calculation.toString())
    } else if (regexCalc.includes("/")) {
        let index = regexCalc.indexOf("/")
        calculation = regexCalc[index -1 ] / regexCalc[index + 1 ];
        console.log(calculation.toString())
    }
}