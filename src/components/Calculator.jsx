import NumberInput from "./NumberInput";

const Calculator = ({churrascoQuantidades, setValues}) =>{

    const handleNumberInput = (type, value) => {
        setValues({...churrascoQuantidades, [type]: value});
    };

    return(
        <div class="row-first">
            <NumberInput amount={churrascoQuantidades.women} onAmountChange={(value) => handleNumberInput('women', value)} type="women"/>
            <NumberInput amount={churrascoQuantidades.men} onAmountChange={(value) => handleNumberInput('men', value)} type="men"/>
            <NumberInput amount={churrascoQuantidades.kid} onAmountChange={(value) => handleNumberInput('kid', value)} type="kid"/>
        </div>
    )

}

export default Calculator