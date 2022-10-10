import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Filmes({ filme }) {
  return (
    <Capa>
      <Image>
        <Link
          key={filme.id}
          to={{
            pathname: `/horarios/${filme.id}`,
            state: filme,
          }}
        >
          <img src={filme.posterURL} alt="foto do filme" />
        </Link>
      </Image>
    </Capa>
  );
}

const Image = styled.div`
  img {
    width: 129px;
    height: 193px;
    margin-left: 10px;
    margin-top: 7px;

    &:hover {
      transform: scale(1.5);
    }
  }
`;

const Capa = styled.div`
  width: 148px;
  height: 209px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-left: 30px;
  margin-top: 10px;
`;
