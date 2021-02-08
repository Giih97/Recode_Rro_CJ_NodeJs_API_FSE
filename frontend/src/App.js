import { BrowserRouter } from 'react-router-dom';
import {Container} from 'react-bootstrap';
//import Menu from './Componentes/Menu/Menu'
//import Footer from './Componentes/Footer/footer'
//import Rotas from './Routes';
import {lazy,Suspense} from 'react'

const Rotas = lazy(()=> import('./Routes'))
const Menu = lazy(()=> import('./Componentes/Menu/Menu'))
const Footer= lazy(()=> import('./Componentes/Footer/footer'))

function App() {
  return (
    <BrowserRouter>
    <Container fluid>
        
    <Suspense fallback={<p>CARREGANDO O MENU...</p>}>
        <Menu />
        </Suspense>
        <div>
          <Suspense fallback={<p>CARREGANDO A PAGINA...</p>}>
          <Rotas />
          </Suspense>
        </div>
        <Suspense fallback={<p>CARREGANDO O RODAPÉ...</p>}>
          <Footer />
          </Suspense>
       
      </Container>
    </BrowserRouter>
  );
}

export default App;
