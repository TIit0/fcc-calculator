import "./Screen.css";

export default function Screen({ currentOperation, result, setCurrentOperation, lastOne, history }) {

    console.log(currentOperation, "SCREEN CURRENT OP")

let output;

    const formula = history ? history.replace("*", "x") : "0";
    
    if ( currentOperation[currentOperation.length -1] === "=") {
        output = result;
    } else {
        output = lastOne;
    }

console.error(lastOne, "SCREEEEN")


    return (
        <>
            <div className="formula-screen">
                {formula}
            </div>
            <div className="output">{output ? output : "0"}</div>
        </>
    )
}