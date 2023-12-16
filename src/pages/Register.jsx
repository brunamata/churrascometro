import Header from "../components/Header";
import Form from "../components/Form";
import Button from "../components/Button";
import {Link} from 'react-router-dom';

const Register = () => {

    return(
        <div class="container">
            <Header/>
            <Form/>
            <div className="row">
                <Button text="Cadastrar" linkTo="/result"/>
                <div id="nav-container">
                    <Link to="/">
                        <button id="back-nav">Voltar</button>
                    </Link>
                    <Link to="/result">
                        <button id="skip-register"> Pular</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register;