import { Row, Col, Container } from "react-bootstrap";


interface PlantContainerProps {
  data: Array<any>;
}
const PlantContainer = ({ data }: PlantContainerProps) => {
  return (
    <Container>
      <Row className="justify-content-center">
        {data.map((plant) => (
          <Col>
            <img src={plant.imgSrc} alt={plant.imgAlt} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlantContainer;
