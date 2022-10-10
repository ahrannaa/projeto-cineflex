import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Horario() {
  const [filme, setFilme] = useState({});
  const { filmeId } = useParams();
  console.log(filmeId);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`;
    const promisse = axios.get(URL);

    promisse.then((resp) => {
      console.log(resp.data);
      setFilme(resp.data);
    });

    promisse.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <h1> Selecione o horário</h1>
      </Container>
      {filme.days?.map((day) => (
        <>
          <Dia key={day.id}>
            {day.weekday}
            {day.date}
          </Dia>
          <Link to={`/sessao/${filme.id}`}>
          <EscolherHorario>
            {day.showtimes.map((time) => (
              <Hora key={time.id}>{time.name}</Hora>
            ))}
          </EscolherHorario>
          </Link>
          
        </>
      ))}
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

const Dia = styled.div`
  p {
    font-size: 20px;
    margin-left: 15px;
  }
`;

const EscolherHorario = styled.div`
  display: flex;
`;

const Hora = styled.div`
  width: 83px;
  height: 43px;
  background-color: #e8833a;
  margin-left: 15px;
  border-radius: 3px;
`;
