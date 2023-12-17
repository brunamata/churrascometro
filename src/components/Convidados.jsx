const Convidados = ({churrascoQuantidades, totalPessoas}) => {

    const textoTotalConvidados = totalPessoas + " convidado" + (totalPessoas > 1 ? "s" : "")
    const textoTotalHomens = churrascoQuantidades["men"] + " home" + (churrascoQuantidades["men"] > 1 ? "ns": "m")
    const textoTotalMulheres = churrascoQuantidades["women"] + " mulher" + (churrascoQuantidades["women"] > 1 ? "es": "") 
    const textoTotalCriancas = churrascoQuantidades["kid"] + " criança" + (churrascoQuantidades["kid"] > 1 ? "s" : "")

    return (
        <div class="result-total-guest">
            <p>Confira a lista para o seu churrasco!</p>
            <p id="total-guest">{textoTotalConvidados}</p>
            <span class="guest-list">{textoTotalHomens}</span>
            <span class="guest-list">{textoTotalMulheres}</span>
            <span class="guest-list">{textoTotalCriancas}</span>
        </div>
    )
}

export default Convidados;