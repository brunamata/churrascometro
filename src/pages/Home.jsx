import Button from "../components/Button";
import Calculator from "../components/Calculator";
import Header from "../components/Header";

const Home = () => {

    return(
        <div class="container">
            <Header/>   
            <h3>Precisa de uma ajudinha com o churrasco? :)
                        <br/><br/>
                 Quantas pessoas vão participar?
            </h3>
            <Calculator></Calculator>
            <Button text="calcular" linkTo="/register"/>
        </div>
    )
}

export default Home;