import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Filmes({filme}) {
  return (
    <Image>
      <Link to={`/horarios/${filme.id}`}>
      <img src={filme.posterURL} alt="foto do filme"/>
      </Link>
  </Image>
  );
}

const Image = styled.div`
   margin-left: 38px;
   img {
    width: 129px;
    height: 193px;
  }
`;
