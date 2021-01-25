import { useEffect, useState } from 'react';
import { Form, Button, Container, Table } from "react-bootstrap";
import Pedido from './pedido';


export default function PagePedidos(props) {
    const [pedidos, setPedidos] = useState([]); // chamar funcao get

    useEffect(() => {
        async function fethData() {
            const url = "http://localhost:3002/pedidos";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setPedidos(resultado);
        }
        fethData();
    }, [])




    const [form, setForm] = useState({
        nome_do_cliente: "",
        endereco: "",
        telefone: "",
        nome_do_prod: "",
        valor_unit: "",
        quantidade: "",
        valor_total: ""
    });

    function mudaEnvio(evento) {
        form[evento.target.name] = evento.target.value;
        console.log(form)

    }



    const envioPedido = async (evento) => {
        evento.preventDefault(); // para não atualizar a pagina automaticamente

        const recPedidos = await fetch("http://localhost:3002/pedidos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(form)
        });
    }

    return (

        <Container>
            <div>
                <h3 id="titulo"> <b>Faça seu Pedido</b> </h3>
            </div>
            <Form onSubmit={envioPedido} className="col-xl-10 col-md-6 mx-auto">
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control onChange={mudaEnvio} type="text" id="nome" name="nome_do_cliente" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Endereço: </Form.Label>
                    <Form.Control onChange={mudaEnvio} type="text" id="endereco" name="endereco" />
                </Form.Group>
                <Form.Group>
                    <Form.Label> Telefone: </Form.Label>
                    <Form.Control onChange={mudaEnvio} type="text" id="telefone" name="telefone" />
                </Form.Group>
                <Form.Group>
                    <Form.Label> Produto: </Form.Label>
                    <Form.Control onChange={mudaEnvio} id="nome_do_prod" name="nome_do_prod" type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label> Preço Unitário: </Form.Label>
                    <Form.Control onChange={mudaEnvio} type="number" id="valor" name="valor_unit" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Quantidade:</Form.Label>
                    <Form.Control onChange={mudaEnvio} type="number" id="quantidade" name="quantidade" />
                </Form.Group>
                <Form.Group>
                    <Form.Label> Preço Final:</Form.Label>
                    <Form.Control onChange={mudaEnvio} type="number" id="valor_total" name="valor_total" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>

            <Table>
                <tread>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>endereco</th>
                        <th>telefone</th>
                        <th>produto</th>
                        <th>valor</th>
                        <th>quantidade</th>
                        <th>total</th>
                    </tr>
                </tread>
                <tbody>
                    {pedidos && pedidos.map(pedido => <Pedido key={pedido.id_pedido} id={pedido.id_pedido} nome_do_cliente={pedido.nome_do_cliente} endereco={pedido.endereco}
                        telefone={pedido.telefone} nome_do_prod={pedido.nome_do_prod} valor_unit={pedido.valor_unit} quantidade={pedido.quantidade} valor_total={pedido.valor_total} />)}
                </tbody>
            </Table>
        </Container>

    );
}
