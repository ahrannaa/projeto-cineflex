import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Sessao() {
  const [assentos, setAssentos] = useState({});
  const { assentoId } = useParams();
  const [cor, setCor] = useState("");
  console.log(assentoId);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${assentoId}/seats`;
    const promisse = axios.get(URL);

    promisse.then((resp) => {
      console.log(resp.data);
      setAssentos(resp.data);
    });

    promisse.catch((err) => {
      console.logo(err.response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <h1> Selecione o(s) assentos(s) </h1>
      </Container>
      <Cadeiras>
        {assentos.seats?.map((assento) => {
          if (assento.isAvailable) {
            return (
              <Lugar key={assento.id}>{assento.isAvailable.toString()}</Lugar>
            );
          } else if (!assento.isAvailable) {
            return (
              <Indisponível key={assento.id}>
                {assento.isAvailable.toString()}
              </Indisponível>
            );
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
      <form>
        <Comprador>
          <label for="campoNome">Nome do Comprador:</label>
          <Input type="text" id="campoNome" placeholder="Digite seu nome..."></Input>
          <label for="cpf">CPF do comprador:</label>
          <Input type="text" id="cpf" placeholder="Digite seu CPF..."></Input>
        </Comprador>
        <Botao type="submit"> Reservar assento(s) </Botao>
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
  flex-wrap: wrap;
  padding: 20px;
`;
const Lugar = styled.div`
  width: 26px;
  height: 26px;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 12px;
  display: flex;
  align-items: center;
  text-align: center;
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
  text-align: center;
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
   margin-left:60px;
   margin-top: 20px;
   background-color: #E8833A;
   border-radius: 3px;
   color:#ffffff;
   font-size:18px;
   border:none;
`