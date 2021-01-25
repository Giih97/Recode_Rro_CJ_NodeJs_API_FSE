import { useState, useEffect } from "react";
import Produto from "./Produto";
import { Container, Row } from "react-bootstrap";



export default function Produtos() {
  const [produtos, setProdutos] = useState([])

  useEffect(async () => {
    const resposta = await fetch(`http://localhost:3002/`);
    const dados = await resposta.json();
    setProdutos(dados);
  
  }, []);
  
  return (
    <Container>
      <Row>
        {produtos &&
          produtos.map(dados => 
            <Produto
              key={dados.id}
              categoria={dados.categoria}
              imagem={dados.imagem}
              descricao={dados.descricao}
              preco={dados.preco}
              preco_venda={dados.preco_venda}
            />
          )}
      </Row>
    </Container>
  );
}


