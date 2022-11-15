import "./Screen.css";

export default function Screen({ currentOperation, result, setCurrentOperation, lastOne, history }) {

    console.log(currentOperation, "SCREEN CURRENT OP")
let output;
console.log(Math.sign(currentOperation) == -1)

    const formula = history ? history.replace("*", "x") : "0";
    
    
        if(Math.sign(currentOperation) == -1) {
            output = result;
        } else {

            output = lastOne === "N" ? "NaN" : lastOne;
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