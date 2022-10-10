import styled from "styled-components";

export default function Header() {
  return (
    <Cabecalho>
      <h1>Cineflex</h1>
    </Cabecalho>
  );
}

const Cabecalho = styled.div`
  width: 375px;
  height: 67px;
  background-color: #c3cfd9;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Roboto',sans-serif; 
    font-size: 50px;
    display: flex;
    color: #e8833a;
  }
`;
