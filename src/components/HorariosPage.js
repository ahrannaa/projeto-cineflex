import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Horario(props) {
  const [filme, setFilme] = useState({});
  const { filmeId } = useParams();
  const location = useLocation()
 

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
          {" "}
          <EscolherDia>
            <Dia>{day.weekday}-</Dia>
            <Dia>{day.date}</Dia>
          </EscolherDia>
          <EscolherHorario>
            {day.showtimes.map((time) => (
              <StyledLink
                to={`/sessao/${time.id}`}
                state={{
                  day,
                  time,
                  filme: location.state, 
                }}
              >
                <Hora key={time.id}>{time.name}</Hora>
              </StyledLink>
            ))}
          </EscolherHorario>
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
    display: flex;
  }
`;

const EscolherHorario = styled.div`
  display: flex;
`;

const EscolherDia = styled.div`
  display: flex;
  margin: 20px;
`;

const Hora = styled.div`
  width: 83px;
  height: 43px;
  background-color: #e8833a;
  margin-left: 15px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  color: #ffffff;
  text-decoration: none;
`;
