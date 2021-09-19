import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeLogo from "../components/HomeLogo";
import SelectBox from "../components/SelectBox";
import data from "../data/data.json";
import { types } from "../data/plants.json";
import { seasons } from "../data/seasons.json";

const HomeScreen = () => {
  const { TYPE_PLANTS } = data;
  console.log("types", TYPE_PLANTS);

  const [plant, setPlant] = useState(1);
  const [season, setSeason] = useState(1);
  const [yesterdayWheather, setYesterdayWheather] = useState(0);
  const [todayWheather, setTodayWheather] = useState(0);
  const [riskValue, setRiskValue] = useState(0);
  const [isResultVisible, setisResultVisible] = useState(false);
  const [useGreenhouse, setUseGreenhouse] = useState(false);

  const handleRiskInput = (e: any) => setRiskValue(Number(e.target.value));

  console.log(plant);
  console.log("season", season);
  console.log(types);
  console.log(seasons);
  console.log(yesterdayWheather, todayWheather);

  const filterWheaterFromSeason = (id?: number) => {
    const [wheaterFromSeason] = seasons
      .filter((item) => item.id === id)
      .map((item) => item.weather);
    return wheaterFromSeason;
  };
  console.log(filterWheaterFromSeason(season));

  const onClickCalculate = () => {
    const plantData = TYPE_PLANTS.filter((item) => item.id === plant);
    const [seasons] = plantData.map((item) => item.season);
    const wheaterFromSeason = seasons.filter((item) => item.id === season);
    const [wheathers] = wheaterFromSeason.map((item) => item.weather);
    const filteredWheater = wheathers.filter(
      (item) => item.id !== yesterdayWheather && item.id !== todayWheather
    );
    const valuesFromWheaters = filteredWheater.map((item) => item.value);
    // const positives = valuesFromWheaters.filter((item) => item > 0);
    const negatives = valuesFromWheaters.filter((item) => item < 0);
    // const neutrals = valuesFromWheaters.filter((item) => item === 0);
    // const percentageOfPositive = Number(
    //   ((positives.length / valuesFromWheaters.length) * 100).toFixed(2)
    // );
    const percentageOfNegative = Number(
      ((negatives.length / valuesFromWheaters.length) * 100).toFixed(2)
    );
    // const percentageOfNeutrals = Number(
    //   ((neutrals.length / valuesFromWheaters.length) * 100).toFixed(2)
    // );

    const useGreenhouse = percentageOfNegative > riskValue ? true : false;
    setisResultVisible(true);
    setUseGreenhouse(useGreenhouse);
  };


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
               { isResultVisible ? 
               <>
               {
                 useGreenhouse ? (<p>USE A GREENHOUSE</p>) : (<p>DO NOT USE A GREENHOUSE</p>)
               }
               <button className="pushable mb-3" onClick={()=> {}}>
               <span className="front">DONATE</span>
             </button>
             <br />
               <button className="pushable" onClick={()=> setisResultVisible(false)}>
               <span className="front">BACK</span>
             </button>
               </> : ( <button className="pushable" onClick={onClickCalculate}>
               <span className="front">Calculate</span>
             </button>)}
               
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
