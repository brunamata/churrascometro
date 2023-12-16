import Input from "./Input";
import { useState } from "react";

const Form = () => {

    const [checked, setCheck] = useState(true);

    function handleCheck(){
        setCheck(!checked)
    }

    return(
        <div class="calculator">
            <div class="row">
                <div class="input-form-group">
                    <p id="header-form">Fique por dentro de todas as novidades. Cadastre seu e-mail e receba promoções especiais!</p>
                    <form>
                        <Input id="nome"/>
                        <Input id="email"/>
                        <Input id="postal-code"/>
                    </form>
                    <div id="consent-input">
                        <input type="checkbox" id="consent-checkbox" name="consentInput" checked={checked} onClick={() => handleCheck()}/>
                        <label htmlFor="consent-checkbox" id="consent-label">Concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses.</label>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Form