import { Link } from "react-router-dom";
import NavMenu from "./Navbar";
import { Container, Col, Row } from "react-bootstrap";
import "./donar.css";

function Donar() {
  return (
    <>
      <NavMenu />
      <br />
      <h3>Colaborá con Encuentro</h3>
      <br />

      <p>
        Es esencial replantear nuestro proyecto de atención y acompañamiento a
        personas con discapacidad junto a la comunidad y, en este desafío,
        necesitamos tu apoyo. Unite a nuestra campaña de Sostenimiento
        Colectivo: podés contribuir mensualmente o donar por única vez.
      </p>
      <br />

      <Container className="flex">
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <Link
                to="https://acivilencontrarnos.mipago.coop/companies/1/request-recurring-payment/1"
                className="box"
              >
                MENSUAL 2500
              </Link>
            </Col>
            <Col>
              <Link
                to="https://acivilencontrarnos.mipago.coop/companies/1/request-recurring-payment/2"
                className="box"
              >
                MENSUAL 5000
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <Link
                to="https://acivilencontrarnos.mipago.coop/companies/1/request-recurring-payment/4"
                className="box"
              >
                MENSUAL 10000
              </Link>
            </Col>
            <Col>
              <Link
                to="https://acivilencontrarnos.mipago.coop/companies/1/request-recurring-payment/5"
                className="box"
              >
                MENSUAL 20000
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <Link
                to="https://acivilencontrarnos.mipago.coop/companies/1/request-recurring-payment/3"
                className="box"
              >
                APORTÁ POR ÚNICA VEZ
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Donar;
