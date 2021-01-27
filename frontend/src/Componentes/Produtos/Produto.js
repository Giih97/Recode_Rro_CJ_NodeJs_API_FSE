
import './Produto.css'
import {Card,Col,Button} from "react-bootstrap";



 const Produto = (props) =>
{

    return (
        <Col style={{display:"inline-block"}} id={props.categoria} className="cardp">
        <Card   style={{width: '20rem', height: '26rem'}} id={props.categoria}  >
            <Card.Img variant="top" style={{ width: '18rem', height: '12rem' }} src={require(`./img/${props.imagem}`).default} alt="Imagem de Produtos" />
            <Card.Body style={{width: '18rem', height: '24rem'}}>
            <Card.Title>{props.descricao}</Card.Title>
            <Card.Text > <p>R$<strike>{props.preco}</strike></p>
            <p style={{ color: 'red' }}>R$ {props.preco_venda}</p></Card.Text>
            <Button variant="dark">Adicionar</Button>
            </Card.Body>
        </Card>
        </Col>
    


    );
}
export default Produto