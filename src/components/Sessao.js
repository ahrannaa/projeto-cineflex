import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Sessao(props) {
  const [assentos, setAssentos] = useState({});
  const { timeId } = useParams();
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [assentoEscolhido, setAssentoEscolhido] = useState();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${timeId}/seats`;
    const promisse = axios.get(URL);

    promisse.then((resp) => {
      console.log(resp.data);
      setAssentos(resp.data);
    });

    promisse.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  function comprarIngresso(event) {
    event.preventDefault();
    const requisicao = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      {
        id:{assentoEscolhido},
        name: name,
        cpf: cpf,
      }
    );

    requisicao.then((resp) => {
      setAssentoEscolhido(resp.data);
      
    });

    requisicao.catch((err) => {
      console.log(err.response.data);
    });
  }

  function handleSeat(assento) {
    setAssentoEscolhido(assento);
  }

  

  return (
    <>
      <Container>
        <h1> Selecione o(s) assentos(s) </h1>
        <h1> {JSON.stringify(props?.location?.state)} </h1>
      </Container>
      <Cadeiras>
        {assentos.seats?.map((assento) => {
          if (assento.id === assentoEscolhido?.id) {
            return <Escolhido key={assento.id}> {assento.name} </Escolhido>;
          } else if (assento.isAvailable) {
            return (
              <Lugar key={assento.id} onClick={() => handleSeat(assento)}>
                {assento.name}
              </Lugar>
            );
          } else {
            return <Indisponível key={assento.id}>{assento.name}</Indisponível>;
          }
        })}
      </Cadeiras>
      <Disponibilidade>
        <Teste>
          <Selecionado />
          <Paragrafo>Selecionado</Paragrafo>
        </Teste>
        <Teste>
          <Disponivel />
          <Paragrafo>Disponível</Paragrafo>
        </Teste>
        <Teste>
          <Indisponivel />
          <Paragrafo>Indisponível</Paragrafo>
        </Teste>
      </Disponibilidade>

      <form onSubmit={comprarIngresso}>
        <Comprador>
          <label for="campoNome">Nome do Comprador:</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome..."
          ></Input>
        </Comprador>
        <Comprador>
          <label for="cpf">CPF do comprador:</label>
          <Input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite seu CPF..."
          ></Input>
        </Comprador>
        <Link to={`/sucesso`}>
          <Botao type="submit"> Reservar assento(s) </Botao>
        </Link>
      </form>
    </>
  );
}

const Container = styled.div`
  width: 375px;

  h1 {
    font-size: 24px;
    color: #293845;
    text-align: center;
    padding: 20px;
  }
`;

const Cadeiras = styled.div`
  width: 365px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  padding: 20px;
  font-size:11px
`;
const Lugar = styled.div`
  width: 26px;
  height: 26px;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:4px;
  
  font-weight: 400px;
`;

const Escolhido = styled.div`
  width: 26px;
  height: 26px;
  background: #1aae9e;
  border: 1px solid #808f9d;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  font-size: 12px;
  font-weight: 400px;
`;

const Indisponível = styled.div`
  width: 26px;
  height: 26px;
  background: #fbe192;
  border: 1px solid #808f9d;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  font-size: 12px;
  font-weight: 400px;
`;
const Disponibilidade = styled.div`
  width: 365px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const Selecionado = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17px;
  background-color: #1aae9e;
`;

const Disponivel = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17px;
  background-color: #c3cfd9;
`;

const Indisponivel = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17px;
  background-color: #fbe192;
`;

const Teste = styled.div`
  display: flex;
  align-items: center;
`;

const Paragrafo = styled.div`
  font-size: 13px;
  padding: 5px;
`;

const Comprador = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const Input = styled.input`
  width: 327px;
  height: 51px;
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
