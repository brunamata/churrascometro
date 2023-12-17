import { useState } from "react";

const NumberInput = ({amount, onAmountChange, type}) => {

    const translaction = {
        women: "Mulheres",
        men: "Homens",
        kid: "Crianças"
    }

    const handleAmount = (signal) => {
        
        if(signal === "-"){

            if(amount > 0){
                onAmountChange(amount - 1)
            } 
            else return

        }
        else if(signal === "+"){
            onAmountChange(amount + 1)
        }
        else return
    }

    return (
        <>
            <div class="input-group">
                <label for={type}>{translaction[type]}</label>
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