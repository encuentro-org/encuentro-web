import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavMenu() {
  return (
    <>
      <Navbar className="nav">
        <Container>
          <Link className="btn btn-primary" to="/">
            Inicio
          </Link>
          <Link className="btn btn-primary" to="/nosotros">
            Quienes Somos?
          </Link>
          <Link className="btn btn-primary" to="/novedades">
            Novedades
          </Link>
          <Link className="btn btn-primary" to="/actividades">
            Actividades
          </Link>
          <Link className="btn btn-primary" to="/contacto">
            Contacto
          </Link>
          <Link className="btn btn-warning" to="/donar">
            Donar
          </Link>
        </Container>
      </Navbar>
      <br></br>
    </>
  );
}

export default NavMenu;
