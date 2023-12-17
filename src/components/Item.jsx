

const Item = ({nome, quantidade}) => {

    const unidadeDeMedida = {
        "Carne": " kg",
        "Pão de Alho": " unidades",
        "Refrigerante": " garrafa de 2 L",
        "Água": " garrafa de 1 L",
        "Carvão": " kg",
        "Sal": " kg",
        "Gelo": " kg",
        "Cerveja": " garrafas de 600ml"
    }

    const item = {
        nome : nome,
        quantidade : String(quantidade) + unidadeDeMedida[nome]
    }


    return(
        <li>
            <strong>{item.nome}</strong>
            <span>{item.quantidade}</span>
        </li>
    )

}

export default Item;