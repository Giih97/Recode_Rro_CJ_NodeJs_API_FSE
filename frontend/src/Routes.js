import { Switch, Route } from 'react-router-dom';

import Inicio from './Paginas/Inicio/inicio';
import Contatos from './Paginas/Contatos/contatos';
import Lojas from './Paginas/NossasLojas/lojas';
import PageProdutos from './Paginas/Produtos/pgprodutos';
import PagePedidos from './Paginas/Pedidos/pedidos';

function Rotas() {
    return (
        <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/Produtos" component={PageProdutos} />
            <Route exact path="/Pedidos" component={PagePedidos} />
            <Route exact path="/Contatos" component={Contatos} />
            <Route exact path="/lojas" component={Lojas} />
        </Switch>
    );
}

export default Rotas;