import { useState } from "react";

const NumberInput = (props) => {

    const type = props.type

    const tradution = {
        women: "Mulheres",
        men: "Homens",
        kid: "Crianças"
    }

    const [amount, setAmount] = useState(0);

    const handleAmount = (signal) => {
        
        if(signal === "-"){

            if(amount > 0){
                setAmount(amount - 1)
            } 
            else return

        }
        else if(signal === "+"){
            setAmount(amount + 1)
        }
        else return
    }

    return (
        <>
            <div class="input-group">
                <label for={type}>{tradution[type]}</label>
                <input type="number" id={type} value={amount} class="input-valid"/>
                <div class="button-group">
                    <button class="input-group__button--small" onClick={() => handleAmount("-")}>-</button>
                    <button class="input-group__button--small" onClick={() => handleAmount("+")}>+</button>
                </div>
            </div>
        </>
    )
}

export default NumberInput