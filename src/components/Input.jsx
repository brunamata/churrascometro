import { useState } from "react"

const Input = (props) =>{

    const type = {
        "nome" : "text",
        "email": "email",
        "postal-code": "number"
    }

    const id = props.id
    const placeholder = "Digite seu " + (id === "postal-code" ? "CEP" : id);
    const invalidId = "invalid-" + id
    const invalidText = "Por favor, insira um " + (id === "postal-code" ? "CEP" : id) + " válido!"

    const [isValid, setValid] = useState(false);


    function handleInput($event){
        console.log(isValid)
        const value = $event.target.value;
        console.log(value)
        if(id === "email"){
            setValid(value.includes('@') ? true : false)
        } else {
            value === "" ? setValid(false) : setValid(true)
        }
    }

    /* por algum motivo ele não renderizando a mensagem de erro :(. Mas ele tá fazendo a 
    verificação certinho! */
    return(
        <>
            <input type={type[id]} id={id} placeholder={placeholder} class="input-form" onChange={($event) => handleInput($event)} />
            {!isValid && <p id={invalidId}>{invalidText}</p>}
        </>

    )

}

export default Input;