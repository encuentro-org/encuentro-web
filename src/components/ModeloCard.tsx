import Card from "react-bootstrap/Card";

function ModeloCard() {
  return (
    <Card style={{ width: "100%", marginTop: "10px" }}>
      <Card.Body>
        <Card.Title>
          <h3>Modelo Social</h3>
        </Card.Title>
        <Card.Text>
          El modelo social de la discapacidad es sostenido por la organización
          Mundial de la salud <b className="modelob">(OMS)</b> y por el marco de
          las Convenciones y principios de derechos humanos. Para este modelo,
          la discapacidad no es un atributo de la persona, sino un conjunto de
          condiciones que responden la interacción entre las características del
          inContaineriduo y el contexto social. En este sentido, la discapacidad
          es un resultado negativo de la interacción entre una condición
          personal <b className="modelob">(la deficiencia)</b> y el medio{" "}
          <b className="modelob">(debido a sus barreras)</b>.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ModeloCard;
