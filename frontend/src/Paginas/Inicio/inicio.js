
import { Carousel, Container} from 'react-bootstrap';
import eletros3 from './eletros3.jpg';
import eletros2 from './eletros2.png';




export default function Inicio(props) {
    return (

        <>
      <Container fluid>
      <Container>
          <h3 className="p-6 ml-0"><b>Seja Bem Vindo (a)!</b></h3>
          <p> Aqui em nossa loja, <em> programadores tem descontos</em> nos produtos para sua casa</p>
      </Container>


  <Carousel className="carousel slide col-5 mx-auto ">
      <Carousel.Item >
          <img 
              src={eletros2}
               alt="First slide"
               className="imgEletro d-block w-100 " />

      </Carousel.Item>

      <Carousel.Item>
          <img 
              src={eletros3}
              alt="Second slide"
              className="imgEletro d-block w-100"/>
      </Carousel.Item>
</Carousel>

</Container>


</>


    );
}