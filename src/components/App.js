import CatalogoPage from "./CatalogoPage";
import Header from "./Header";
import HorariosPage from "./HorariosPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sessao from "./Sessao";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CatalogoPage />} />
        <Route path="/horarios/:filmeId" element={<HorariosPage />} />
        <Route path="/sessao/:assentoId" element={<Sessao/>} />
      </Routes>
    </BrowserRouter>
  );
}
