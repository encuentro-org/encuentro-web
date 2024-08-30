import { Col, Row, Container } from "react-bootstrap";
import CentroCard from "./CentroCard";
import Encontrarnos from "./EncontrarnosCard";
import ModeloCard from "./ModeloCard";
import CalidadCard from "./CalidadCard";

function NosotrosContainer1() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} className="d-flex justify-content-center mb-3 w-50">
          <Encontrarnos />
        </Col>
        <Col xs={12} sm={6} className="d-flex justify-content-center mb-3 w-50">
          <CentroCard />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} className="d-flex justify-content-center mb-3 w-50">
          <ModeloCard />
        </Col>
        <Col xs={12} sm={6} className="d-flex justify-content-center mb-3 w-50">
          <CalidadCard />
        </Col>
      </Row>
    </Container>
  );
}

export default NosotrosContainer1;
