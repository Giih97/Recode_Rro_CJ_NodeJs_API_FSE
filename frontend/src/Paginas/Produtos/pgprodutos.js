
import Produtos from '../../Componentes/Produtos/Produtos';
import { Row,Col} from 'react-bootstrap';
import Categorias from '../../Componentes/Produtos/Categorias';

export default function PageProdutos(props) {

    return (

        <>
        <Row>
        <Col lg={1} md={3}>
                <Categorias/>
            </Col> 
            <Col lg={9} md={7} className="mx-auto">
                <Produtos/>
            </Col> 
        </Row>
    


        
        </>
        
    );

}