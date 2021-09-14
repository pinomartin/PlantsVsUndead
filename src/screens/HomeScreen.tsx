import { Col, Container, Row } from "react-bootstrap";
import HomeLogo from "../components/HomeLogo";
import SelectBox from "../components/SelectBox";

const HomeScreen = () => {
  return (
    <Container>
      <Row className="background__image justify-content-center">
        <Col md={6} className="text-center">
          <HomeLogo />
          <Row>
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                <SelectBox color="#FFF76C" title="SEASON" value="Season" buttonBackgroundColor="#FDC25B" arrowColor="#EB994D" />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                <SelectBox color="#FFF76C" title="YESTERDAY" value="Season" buttonBackgroundColor="#FDC25B" arrowColor="#EB994D"/>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                <SelectBox color="#FFF76C" title="TODAY" value="Season" buttonBackgroundColor="#FDC25B" arrowColor="#EB994D"/>
              </Col>
            </Row>
            {/* <Row className="justify-content-center">
            <Col md={8} className="mt-3 mb-3">
              <SelectBox color="#FFF76C" title="SEASON" value="Season" />
            </Col>
          </Row> */}
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                <SelectBox color="#48FFC1" title="PLANT TYPE" value="Season" buttonBackgroundColor="#10BF75" arrowColor="#0C8D56"/>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                <SelectBox color="#FF719C" title="RISK FACTOR" value="Season" buttonBackgroundColor="#E9576F" arrowColor="#A64250"/>
              </Col>
            </Row>
            <Row className="justify-content-center mt-5">
              <Col md={8} className="mt-3 mb-3">
                <button className="btn btn-warning rounded btn-lg">CALCULAR</button>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
