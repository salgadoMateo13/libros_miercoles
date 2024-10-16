import { Route, Routes } from "react-router-dom";
import { Acerca } from "../../componentes/otros/acerca";
import { Inicio } from "../../componentes/contenedor/inicio";
import { LibroCrear } from "../../componentes/libros/LibroCrear";
import { LibroAdmin } from "../../componentes/libros/libroAdmin";
import { LibroListar } from "../../componentes/libros/libroListar";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { LibroActualizar } from "../../componentes/libros/libroActualizar";

export const Ruteo = () => {
  return (
    <Routes>

      {/*<Route path="/"  element={<Inicio/>}/> */}


      <Route path="/" element={<Inicio />} />

      <Route path="/libcre" element={<LibroCrear />} />

      <Route path="/liblis" element={<LibroListar />} />

      <Route path="/libadm" element={<LibroAdmin />} />

      <Route path="/libact/:codigo" element={<LibroActualizar />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
