import Header from "../components/Header";
import Convidados from "../components/Convidados";
import Table from "../components/Table";
import Button from "../components/Button";

const Result = ({churrascoQuantidades}) => {

    const totalPessoas = 
        churrascoQuantidades["women"] + 
        churrascoQuantidades["men"] +
        churrascoQuantidades["kid"];

    return(
        <div class="container">
            <Header/>
            <div class="calculator">
                <div>
                    <Convidados churrascoQuantidades={churrascoQuantidades} totalPessoas={totalPessoas}/>
                    <Table churrascoQuantidades={churrascoQuantidades} totalPessoas={totalPessoas}/>
                </div>
                <div class="row">
                    <Button text="Novo Cálculo" linkTo="/" />
                </div>
            </div>
        </div>
    )
}

export default Result;