import { Container, Row, Col } from "react-bootstrap";
import HomeLogo from "../components/HomeLogo";
import PlantContainer from "../components/PlantContainer";
import {
  darkPlants,
  electroPlants,
  firePlants,
  icePlants,
  lightPlants,
  metalPlants,
  parasitePlants,
  waterPlants,
  windPlants,
} from "../data/imgs/plants";

const PlantsScreen = () => {
  return (
    <Container fluid className="background__image">
      <Row className="justify-content-center">
        <Col xs={12} sm={9} md={6} lg={6} xl={3} className="text-center ">
          <HomeLogo />
          <Container fluid>
            <PlantContainer data={darkPlants} />
            <PlantContainer data={electroPlants} />
            <PlantContainer data={firePlants} />
            <PlantContainer data={icePlants} />
            <PlantContainer data={lightPlants} />
            <PlantContainer data={metalPlants} />
            <PlantContainer data={parasitePlants} />
            <PlantContainer data={waterPlants} />
            <PlantContainer data={windPlants} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default PlantsScreen;
