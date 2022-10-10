import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Filmes from "./Filmes";

export default function Catalogo(props) {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    const promisse = axios.get(URL);

    promisse.then((resp) => {
      console.log(resp.data);
      setFilmes(resp.data);
    });

    promisse.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  if(filmes.length === 0){
    return <div>Carregando...</div>
  }

  return (
    <Container>
      <h1> Selecione o filme </h1>
      <Pictures>
        {filmes.map((posterURL) => (
          <Filmes key={posterURL.id} filme={posterURL} />
        ))}
      </Pictures>
    </Container>
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

const Pictures = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
