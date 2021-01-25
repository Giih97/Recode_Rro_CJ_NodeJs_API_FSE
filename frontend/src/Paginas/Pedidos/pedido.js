
export default function Pedido(props) 
{

    return (

        
        <tr>
            <td>{props.id_pedido}</td>
            <td>{props.nome_do_cliente} </td>
            <td>{props.endereco}</td>
            <td>{props.telefone}</td>
            <td>{props.nome_do_prod}</td>
            <td>{props.valor_unit}</td>
            <td>{props.quantidade}</td>
            <td>{props.valor_total}</td>
    </tr>

    );
 }