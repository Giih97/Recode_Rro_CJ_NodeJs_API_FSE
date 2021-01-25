import Menu from './Componentes/Menu/Menu'
import Footer from './Componentes/Footer/footer'
import { BrowserRouter } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Rotas from './Routes';




function App() {
  return (
    <BrowserRouter>
    <Container fluid>

        <Menu />

        <Rotas />
      
          <Footer />
       
      </Container>
    </BrowserRouter>
  );
}

export default App;
