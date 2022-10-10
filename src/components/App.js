import CatalogoPage from "./CatalogoPage";
import Header from "./Header";
import HorariosPage from "./HorariosPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sessao from "./Sessao";
import Sucesso from "./Sucesso";
import styled from "styled-components";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<CatalogoPage />} />
          <Route path="/horarios/:filmeId" element={<HorariosPage />} />
          <Route path="/sessao/:timeId" element={<Sessao />} />
          <Route path="/sucesso" element={<Sucesso />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  
 margin-left: 450px;
`;
