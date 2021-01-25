import { ListGroup } from "react-bootstrap";
import "./Categorias.css";

export default function Categorias(props) {
  const exibirCategoria = (evento) => {
    const categoria = evento.target.id;
    let elementos = document.getElementsByClassName("cardp");
    for (var i = 0; i < elementos.length; i++) {
      if (categoria === elementos[i].id || categoria === "todos") {
        elementos[i].style = "display:block";
      }
      if (categoria === "destaques") {
        elementos[i].style = "display:block";
      } else {
        elementos[i].style = "display:none";
        console.log(elementos);
      }
    }
  };

  return (
    <>
      <div className="tituloP">
        <h3 className="p-5 text-center">
          <b>Produtos</b>
        </h3>
      </div>

      <div>
        <div className="tituloC2">
          <h4>Categorias </h4>
        </div>

        <div className="lista">
          <ListGroup>
            <ListGroup.Item action onClick={exibirCategoria} id="destaques">
              Destaques (3)
            </ListGroup.Item>
            <ListGroup.Item action onClick={exibirCategoria} id="todos">
              Todos (12)
            </ListGroup.Item>
            <ListGroup.Item action onClick={exibirCategoria} id="geladeira">
              Geladeiras (3)
            </ListGroup.Item>
            <ListGroup.Item action onClick={exibirCategoria} id="fogao">
              Fogões (2)
            </ListGroup.Item>
            <ListGroup.Item action onClick={exibirCategoria} id="microondas">
              Microondas (3)
            </ListGroup.Item>
            <ListGroup.Item
              action
              onClick={exibirCategoria}
              id="Lavadora de Roupas"
            >
              Lavadora (2)
            </ListGroup.Item>
            <ListGroup.Item action onClick={exibirCategoria} id="Lava_louca">
              Lava-Louças (2)
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  );
}
