import Button from "../components/Button";
import Calculator from "../components/Calculator";
import Header from "../components/Header";
import { useEffect } from "react";

const Home = ({churrascoQuantidades, setQuantidades}) => {

    useEffect(() => {
        const storedValues = JSON.parse(localStorage.getItem('churrascoQuantidades'));
        if (storedValues) {
            setQuantidades(storedValues);
        }
      }, [setQuantidades]);

    return(
        <div class="container">
            <Header/>   
            <h3>Precisa de uma ajudinha com o churrasco? :)
                        <br/><br/>
                 Quantas pessoas vão participar?
            </h3>
            <Calculator churrascoQuantidades={churrascoQuantidades} setValues={setQuantidades}></Calculator>
            <Button text="calcular" linkTo="/register"/>
        </div>
    )
}

export default Home;