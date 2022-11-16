import "./Screen.css";

export default function Screen({ currentOperation, result, setCurrentOperation, LastInput, history }) {

    console.log(currentOperation, "SCREEN CURRENT OP")
let output;
console.log(Math.sign(currentOperation) == -1)

    const formula = history ? history.replace("*", "x") : "0";
    
    
        if(Math.sign(currentOperation) == -1) {
            output = result;
        } else {
            output = LastInput === "N" ? "NaN" : LastInput;
        }
    
        
    


console.error(LastInput, "SCREEEEN")


    return (
        <>
            <div className="formula-screen">
                {formula}
            </div>
            <div className="output">{output ? output : "0"}</div>
        </>
    )
}