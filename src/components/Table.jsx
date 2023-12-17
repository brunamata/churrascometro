import Item from "./Item";

const Table = ({churrascoQuantidades, totalPessoas}) => {

    function calcularCarne(){

      const categorias = Object.keys(churrascoQuantidades)
      let soma = 0;

      for(let i = 0; i < categorias.length; i++){
        let categoria = categorias[i];
        switch(categoria){
            case("women"):
                soma += churrascoQuantidades[categoria] * 0.32;
                break;
            case("men"):
                soma += churrascoQuantidades[categoria] * 0.4;
                break;
            case("kid"):
                soma += churrascoQuantidades[categoria] * 0.2;
                break;
            default:
                 soma += 0.0;
        }
    }

        return soma.toFixed(2);
        
    }

    function calcularPaoDeAlho(){

        const categorias = Object.keys(churrascoQuantidades)
        let soma = 0;

        for(let i = 0; i < categorias.length; i++){
            let categoria = categorias[i];
            if(categoria === "kid")
                soma += churrascoQuantidades[categoria];
            else
                soma += churrascoQuantidades[categoria] * 2;
        }
        return soma;
    }

    function calcularCarvao(){
        return totalPessoas;
    }

    function calcularSal(){
        return (totalPessoas * 0.04).toFixed(2);
    }

    function calcularGelo(){
        return (totalPessoas * 0.5).toFixed(2);
    }

    function calcularRefrigerante(){
        return (totalPessoas * 0.2).toFixed(2);
    }

    function calcularAgua(){
        return (totalPessoas * 0.2).toFixed(2);
    }

    function calcularCerveja(){

        const categorias = Object.keys(churrascoQuantidades)
        let soma = 0;

        for(let i = 0; i < categorias.length; i++){
            let categoria = categorias[i];
            if(categoria === "kid")
                soma += 0;
            else
                soma += churrascoQuantidades[categoria] * 3
        }
        return soma;

    }
    
    return(
        <div class="input-group-result">
            <div id="header-result">
                <p>ITEM</p>
                <p>QUANTIDADE</p>
            </div>
            <ul class="results">
                <Item nome="Carne" quantidade={calcularCarne()}/>
                <Item nome="Pão de Alho" quantidade={calcularPaoDeAlho()}/>
                <Item nome="Refrigerante" quantidade={calcularRefrigerante()}/>
                <Item nome="Água" quantidade={calcularAgua()}/>
                <Item nome="Carvão" quantidade={calcularCarvao()}/>
                <Item nome="Sal" quantidade={calcularSal()}/>
                <Item nome="Gelo" quantidade={calcularGelo()}/>
                <Item nome="Cerveja" quantidade={calcularCerveja()}/>
            </ul>
        </div>
)

}

export default Table;