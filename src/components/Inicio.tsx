import NavMenu from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavMenu />
      <br />
      <div className="inicio">
        <h1>Bienvenidos</h1>
        <p>
          Somos una Asociación Civil sin fines de lucro. Brindamos atención y
          acompañamiento a personas con discapacidad y sus familias en el valle
          de Traslasierra, Córdoba, desde el año 2011.
        </p>
        <Link to="/nosotros" className="btn btn-success">
          Conoce mas sobre nuestras tareas...
        </Link>
      </div>
    </>
  );
}

export default Home;
