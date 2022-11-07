import "./Screen.css";

export default function Screen({ currentOperation, result, setCurrentOperation, lastOne }) {

    

let output;

    const formula = currentOperation ? currentOperation.replace("*", "x") : "0";
    
    if ( currentOperation[currentOperation.length -1] === "=") {
        output = result;
    } else {
        output = lastOne;
    }




    return (
        <>
            <div className="formula-screen">
                {formula}
            </div>
            <div className="output">{output ? output : "0"}</div>
        </>
    )
}