import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export default function Sucesso() {
  const location = useLocation()

  console.log(location.state)
  return (
    <>
      <Finalizar>
        <h1> Pedido Feito com Sucesso!</h1>
      </Finalizar>

      <Finalizar>
        <h3>Filme e sessão</h3>
        <p>{location.state.filme.title}</p>
        <p>{location.state.day.weekday} - {location.state.time.name}</p>
      </Finalizar>

      <Finalizar>
        <h3>Ingressos</h3>
        Assento: <p>{location.state.assento.name}</p>
      </Finalizar>

      <Finalizar>
        <h3>Comprador</h3>
        <p>{location.state.name}</p>
        <p>{location.state.cpf}</p>
      </Finalizar>

      <Link to={"/"}>
        <Botao type="submit">Voltar para Home</Botao>
      </Link>
    </>
  );
}

const Finalizar = styled.div`
  width: 375px;

  h1 {
    color: #247a6b;
    font-size: 24px;
    text-align: center;
    padding: 10px;
  }

  h3 {
    font-size: 24px;
    color: #293845;
  }
`;

const Botao = styled.button`
  width: 225px;
  height: 42px;
  margin-left: 60px;
  margin-top: 20px;
  background-color: #e8833a;
  border-radius: 3px;
  color: #ffffff;
  font-size: 18px;
  border: none;
`;
