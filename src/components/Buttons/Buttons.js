import "./Buttons.css";
import buttonArr from "../../utils/buttonArr.json"

export default function Buttons() {

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
                    
                }


                return (
                    <button 
                    className={betterName ? `operator btn ${betterName}` : `btn btn${button}`} 
                    key={button}>
                    {button}
                    </button>
                )
            })}
        </div>
    );
}