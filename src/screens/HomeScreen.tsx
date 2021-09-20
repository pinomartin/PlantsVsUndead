import { Col, Container, Row } from "react-bootstrap";
import HomeLogo from "../components/HomeLogo";
import SelectBox from "../components/SelectBox";
import useData from "../hooks/useData";
import { types } from "../data/plants.json";
import { seasons } from "../data/seasons.json";
import { risks } from "../data/risks.json";
import Button from "../components/Button";
import Result from "../components/Result";

const HomeScreen = () => {
  const {
    plant,
    setPlant,
    season,
    setSeason,
    setRiskValue,
    filterWheaterFromSeason,
    isResultVisible,
    setYesterdayWheather,
    setTodayWheather,
    resetView,
    useGreenhouse,
    getResults,
    percentages,
  } = useData();

  return (
    <Container fluid className="background__image">
      <Row className="justify-content-center">
        <Col xs={12} sm={9} md={6} lg={6} xl={4} className="text-center ">
          <HomeLogo />
          <Row className="justify-content-center">
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                {isResultVisible ? (
                  <Result
                    resultData={percentages.neutral}
                    dataBackgroundColor={"#FFF76C"}
                    title={"INDIFERENT"}
                    titleBackgroundColor={"#FDC25B"}
                  />
                ) : (
                  <SelectBox
                    color="#FFF76C"
                    title="Season"
                    value={season}
                    data={seasons}
                    onChangeValue={setSeason}
                    buttonBackgroundColor="#FDC25B"
                  />
                )}
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                {isResultVisible ? (
                  <Result
                    resultData={percentages.positive}
                    dataBackgroundColor={"#48FFC1"}
                    title={"POSITIVE"}
                    titleBackgroundColor={"#01D6A3"}
                  />
                ) : (
                  <SelectBox
                    color="#FFF76C"
                    title="YESTERDAY"
                    value={season}
                    buttonBackgroundColor="#FDC25B"
                    data={filterWheaterFromSeason(season)}
                    onChangeValue={setYesterdayWheather}
                  />
                )}
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                {isResultVisible ? (
                  <Result
                    resultData={percentages.negative}
                    dataBackgroundColor={"#FF719C"}
                    title={"NEGATIVE"}
                    titleBackgroundColor={"#e9576f"}
                  />
                ) : (
                  <SelectBox
                    color="#FFF76C"
                    title="TODAY"
                    value={season}
                    data={filterWheaterFromSeason(season)}
                    onChangeValue={setTodayWheather}
                    buttonBackgroundColor="#FDC25B"
                  />
                )}
              </Col>
            </Row>
            {isResultVisible ? (
              <>{useGreenhouse ? <></> : <></>}</>
            ) : (
              <Row className="justify-content-center">
                <Col md={8} className="mt-3 mb-3">
                  <SelectBox
                    color="#48FFC1"
                    title="TYPE"
                    value={plant}
                    data={types}
                    onChangeValue={setPlant}
                    buttonBackgroundColor="#10BF75"
                  />
                </Col>
              </Row>
            )}
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                {!isResultVisible && (
                  <SelectBox
                    color="#e9576f"
                    title="RISKS"
                    value={plant}
                    data={risks}
                    onChangeValue={setRiskValue}
                    buttonBackgroundColor="#e9576f"
                  />
                )}
              </Col>
            </Row>
            <Row className="justify-content-center mt-5">
              <Col md={8} className="mt-3 mb-3">
                {isResultVisible ? (
                  <>
                    {useGreenhouse ? (
                      <p>USE A GREENHOUSE</p>
                    ) : (
                      <p>DO NOT USE A GREENHOUSE</p>
                    )}
                    <Button
                      label={"DONATE"}
                      onClick={() => {}}
                      cssAddOn={"mb-3"}
                      // backColor={"#00A88A"}
                    />
                    <br />
                    <Button label={"BACK"} onClick={resetView} />
                  </>
                ) : (
                  <Button label={"Calculate"} onClick={getResults} />
                )}
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
