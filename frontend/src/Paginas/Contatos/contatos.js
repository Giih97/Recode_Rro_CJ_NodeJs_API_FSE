import React from 'react';
import email from './email.png';
import whatsapp from './whatsapp.png';
import  './contato.css';
import Comentarios from './comentarios'
import {Card,Form,Button,Container,Row} from 'react-bootstrap';


export default function Contatos(props) {

    return ( 
        
<>
<Container>
   <div id="tituloContato" >
      <h3 > <b>Contatos</b> </h3>
  </div>
</Container>


<div id="contatos">
    <Card  id="what" style = {{width: "17rem"}}>
        <Card.Body>
            <Card.Title>Whatsapp</Card.Title>
            <Card.Img src={whatsapp}></Card.Img>
            <Card.Text>(11) 98888 - 88888</Card.Text>
        </Card.Body>
    </Card>
    <Card id="email" style = {{width: "17rem"}}>
        <Card.Body>
            <Card.Title>E-mail</Card.Title>
            <Card.Img src={email}></Card.Img>
            <Card.Text>contato @fullstackeletro.com</Card.Text>
        </Card.Body>
    </Card>
</div>

    
    <div id="formulario">
        <Form id="formC" >
            <Form.Group >
               <Form.Label > Nome:  </Form.Label>
                <Form.Control type="text" name="nome" id="nome" />
            </Form.Group>

            <Form.Group>
               <Form.Label> Mensagem  </Form.Label> 
                <Form.Control type = "text" name="msg" id="msg" />
            </Form.Group>
            <Button variant = "dark" type = "submit" id="botaoF"> Enviar </Button>
           
        </Form>
    </div>



</>

    );
}