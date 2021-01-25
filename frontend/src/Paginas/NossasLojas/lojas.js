import { Container,Card } from 'react-bootstrap';
import lojas from './lojas.css';

export default function Lojas(props) {
    return (
    <div>
        <Container Fluid>
            <h3 ><b>Lojas</b></h3>
        </Container>
        <Container Fluid>
        <div id="principal">
        <Card style={{ width: '19rem' }} className="lojas">
        <Card.Body>
        <div>
        <Card.Title>Rio de Janeiro</Card.Title>
        <Card.Text>
            <p> Avenida Presidente Vargas,5000 </p>
            <p> 10&ordm; andar, Centro</p>
            <p>(21) 2589-9999</p>
            </Card.Text>
        </div>
        </Card.Body>  
        </Card>

        <Card style={{ width: '19rem' }}className="lojas">
        <Card.Body>
        <div>
        <Card.Title>São Paulo</Card.Title>
        <Card.Text>
            <p>Avenida Paulista,985</p>
            <p>4&ordm; andar</p>
            <p>Jardins</p>
            <p>(11) 4649-9999</p>
        </Card.Text>
        </div>
        </Card.Body>  
        </Card>

        <Card style={{ width: '19rem' }}className="lojas">
        <Card.Body>
        <div>
        <Card.Title>Santa Catarina</Card.Title>
        <Card.Text>
            <p>Rua Major &Aacute;vila, 370</p>
            <p> Vila Mariana</p>
            <p>(47) 5899-9999 </p>
        </Card.Text>
        </div>
        </Card.Body>  
        </Card>
        </div>
        </Container>
    </div>
   


    );
}