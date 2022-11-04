import "./Screen.css";

export default function Screen({ currentOperation, result, setCurrentOperation }) {
    const formula = currentOperation ? currentOperation.replace("*", "x") : "0";


    return (
        <>
            <div className="formula-screen">
                {formula}
            </div>
            <div className="output">{result}</div>
        </>
    )
}