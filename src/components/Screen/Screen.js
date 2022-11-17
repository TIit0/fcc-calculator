import "./Screen.css";

export default function Screen({
    currentOperation,
    result,
    history,
    lastInput 
}) {

    const formula = history ? history.replace("*", "x") : "0";

    let output;
    if (Math.sign(currentOperation) === -1) {
        output = result;
    } else {
        output = lastInput === "N" ? "NaN" : lastInput;
    }

    console.warn({ result, output})


    return (
        <>
            <div className="formula-screen">{formula}</div>
            <div className="output">{output ? output : "0"}</div>
        </>
    )
}