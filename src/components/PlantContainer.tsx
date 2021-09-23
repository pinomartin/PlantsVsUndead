import { Row, Col, Container } from "react-bootstrap";


interface PlantContainerProps {
  data: Array<any>;
}
const PlantContainer = ({ data }: PlantContainerProps) => {
  return (
    <Container fluid>
      <Row className="justify-content-center plantContainer__row">
        {data.map((plant) => (
          <Col xs={2}>
            <img src={plant.imgSrc} alt={plant.imgAlt} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlantContainer;
