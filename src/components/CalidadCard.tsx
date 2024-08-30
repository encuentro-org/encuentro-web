import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CentroCard() {
  return (
    <Card style={{ width: "100%", marginTop: "10px" }}>
      <Card.Body>
        <Card.Title>
          <h3>Calidad de Vida</h3>
        </Card.Title>
        <Card.Text>
          Es un estado deseado de bienestar personal que: es multidimensional;
          tiene propiedades éticas ligadas a la cultura; tiene componentes
          objetivos y subjetivos; y esta influenciada por factores personales y
          ambientales. Es, al mismo tiempo, el concepto que guía el desarrollo,
          práctica y evaluación permanente de los distintos servicios que se
          brindan desde{" "}
          <Link to="/" style={{ color: "#0BBBE5" }}>
            ENCUENTRO
          </Link>
          .
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CentroCard;
