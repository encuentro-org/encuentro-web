import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CentroCard() {
  return (
    <Card style={{ width: "100%", marginTop: "10px" }}>
      <Card.Body>
        <Card.Title>
          <h3>Centro de Día</h3>
        </Card.Title>
        <Card.Text>
          En el Centro de Día se realizan talleres de arte, cocina, expresión
          corporal, movimiento, actividades de la vida diaria, comunicación,
          huerta y murga, como así también salidas con fines educativos, de
          sociabilización y recreativos a sitios e instituciones de la
          comunidad. Este espacio tiene la finalidad de que los jóvenes y
          adultos que concurren al servicio tengan un acercamiento concreto a un
          entrenamiento diario de sus habilidades para desenvolverse en la vida
          diaria con mayor autonomía. Además, desde 2023, los jóvenes del Centro
          de Día participan en la producción de la línea de cosmética y
          alimentos naturales{" "}
          <Link to="/geo" style={{ color: "green" }}>
            GEO
          </Link>
          . Nuestro Centro de Día cuenta con un equipo de profesionales
          especializados en medicina, psicología, educación especial,
          acompañamiento terapéutico, kinesiología, psicomotricidad, terapia
          ocupacional, fonoaudiología, psicopedagogía, educación física,
          educación especial y trabajo social. Todos ellos trabajan en forma
          coordinada, con objetivos en común planteados desde las diversas
          áreas.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CentroCard;
