import "./Buttons.css";
import buttonArr from "../../utils/data/buttonArr.json"

export default function Buttons({
    setCurrentOperation,
    currentOperation,
    isOverWrite,
    setIsOverWrite,
    setHistory
}) {


function handleClick(e) {
    if (isNaN(e.target.value) && 
    e.target.value === currentOperation[currentOperation.length - 1]) {
        return
    }

    if (e.target.value === "AC") {
        setHistory("")
        return setCurrentOperation("");
    } 

    if (isOverWrite) {
        if(!isNaN(e.target.value)) {
            console.warn("INSIDE")
            setIsOverWrite(false);
            setHistory(e.target.value)
        return setCurrentOperation(e.target.value);
        } else {
            setIsOverWrite(false);
        }
    }
    setHistory(pastHistory => pastHistory + e.target.value)
    setCurrentOperation( lastOperation => lastOperation + e.target.value)
}

    return (
        <div className="button-grid">
            {buttonArr.map( button => {
                let betterName

                switch(button) {
                    case("="):
                    betterName = "equal";
                    break;
                    case("/"):
                    betterName = "divide";
                    break;
                    case("+"):
                    betterName = "add";
                    break;
                    case("-"):
                    betterName = "subtract";
                    break;
                    case("."):
                    betterName = "decimal";
                    break;
                    case("x"):
                    betterName = "multiply";
                    break;
                    default:
                        betterName = null;
                }


                return (
                    <button 
                    className={betterName ? `operator btn ${betterName}` : `btn btn${button}`} 
                    key={button}
                    value={(button === "x") ? "*" : button}
                    onClick={handleClick}>
                    {button}
                    </button>
                )
            })}
        </div>
    );
}