import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeLogo from "../components/HomeLogo";
import SelectBox from "../components/SelectBox";
import data from "../data/data.json";
import { types } from "../data/plants.json";
import { seasons } from "../data/seasons.json";

const HomeScreen = () => {
  const { TYPE_PLANTS } = data;
  console.log(TYPE_PLANTS);

  const [plant, setPlant] = useState(1);
  const [season, setSeason] = useState(1);
  const [yesterdayWheather, setYesterdayWheather] = useState(0);
  const [todayWheather, setTodayWheather] = useState(0);

  const [riskValue, setRiskValue] = useState(0);

  const handleRiskInput = (e: any) => setRiskValue(Number(e.target.value));

  console.log(plant);
  console.log("season", season);
  console.log(types);
  console.log(seasons);
  console.log(yesterdayWheather,todayWheather);

  const filterWheaterFromSeason = (id?:number) => {
    const [wheaterFromSeason] = seasons.filter(item => item.id === id).map(item => item.weather);
    return wheaterFromSeason;
  }
  console.log(filterWheaterFromSeason(season));


  // const filterTodayAndYesterdayWheather = () => {

  // }

  // console.log(seasons.filter((item:any) => item.id === 1));

  return (
    <Container fluid className="background__image">
      <Row className="justify-content-center">
        <Col xs={12} sm={9} md={6} lg={6} xl={4} className="text-center ">
          <HomeLogo />
          <Row className="justify-content-center">
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                <SelectBox
                  color="#FFF76C"
                  title="Season"
                  value={season}
                  data={seasons}
                  onChangeValue={setSeason}
                  buttonBackgroundColor="#FDC25B"
                  arrowColor="#EB994D"
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                <SelectBox
                  color="#FFF76C"
                  title="YESTERDAY"
                  value={season}
                  buttonBackgroundColor="#FDC25B"
                  arrowColor="#EB994D"
                  data={filterWheaterFromSeason(season)}
                  onChangeValue={setYesterdayWheather}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                <SelectBox
                  color="#FFF76C"
                  title="TODAY"
                  value={season}
                  data={filterWheaterFromSeason(season)}
                  onChangeValue={setTodayWheather}
                  buttonBackgroundColor="#FDC25B"
                  arrowColor="#EB994D"
                />
              </Col>
            </Row>
            {/* <Row className="justify-content-center">
            <Col md={8} className="mt-3 mb-3">
              <SelectBox color="#FFF76C" title="SEASON" value="Season" />
            </Col>
          </Row> */}
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                <SelectBox
                  color="#48FFC1"
                  title="TYPE"
                  value={plant}
                  data={types}
                  onChangeValue={setPlant}
                  buttonBackgroundColor="#10BF75"
                  arrowColor="#0C8D56"
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8} className="mt-3 mb-3">
                <input
                placeholder="RISK FACTOR"
                  type="number"
                  min={0}
                  max={100}
                  value={riskValue}
                  onChange={handleRiskInput}
                  step={5}
                  className="risk__input"
                />
                {/* <SelectBox
                  color="#FF719C"
                  title="RISK FACTOR"
                  value="Season"
                  buttonBackgroundColor="#E9576F"
                  arrowColor="#A64250"
                /> */}
              </Col>
            </Row>
            <Row className="justify-content-center mt-5">
              <Col md={8} className="mt-3 mb-3">
                <button className="pushable">
                  <span className="front">Calculate</span>
                </button>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
