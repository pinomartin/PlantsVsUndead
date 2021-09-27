import { useState } from "react";
import data from "../data/data.json";
import { seasons } from "../data/seasons.json";

const useData = () => {
  const { TYPE_PLANTS } = data;
  const [plant, setPlant] = useState(1);
  const [season, setSeason] = useState(1);
  const [yesterdayWheather, setYesterdayWheather] = useState(0);
  const [todayWheather, setTodayWheather] = useState(0);
  const [riskValue, setRiskValue] = useState(0);
  const [isResultVisible, setisResultVisible] = useState(false);
  const [isClipboardVisible, setIsClipboardVisible] = useState(false);
  const [useGreenhouse, setUseGreenhouse] = useState(false);
  const [percentages, setPercentages] = useState({
    positive: 0,
    negative: 0,
    neutral: 0,
  });

  const filterWheaterFromSeason = (id?: number) => {
    const [wheaterFromSeason] = seasons
      .filter((item) => item.id === id)
      .map((item) => item.weather);
    return wheaterFromSeason;
  };

  const resetView = () => {
    setisResultVisible(false);
    setIsClipboardVisible(false);
  };

  const getResults = () => {
    const plantData = TYPE_PLANTS.filter((item) => item.id === plant);
    const [seasons] = plantData.map((item) => item.season);
    const wheaterFromSeason = seasons.filter((item) => item.id === season);
    const [wheathers] = wheaterFromSeason.map((item) => item.weather);
    const filteredWheater = wheathers.filter(
      (item) => item.id !== yesterdayWheather && item.id !== todayWheather
    );
    const valuesFromWheaters = filteredWheater.map((item) => item.value);
    const positives = valuesFromWheaters.filter((item) => item > 0);
    const negatives = valuesFromWheaters.filter((item) => item < 0);
    const neutrals = valuesFromWheaters.filter((item) => item === 0);
    const percentageOfPositive = Number(
      ((positives.length / valuesFromWheaters.length) * 100).toFixed(2)
    );
    const percentageOfNegative = Number(
      ((negatives.length / valuesFromWheaters.length) * 100).toFixed(2)
    );
    const percentageOfNeutrals = Number(
      ((neutrals.length / valuesFromWheaters.length) * 100).toFixed(2)
    );

    const useGreenhouse = percentageOfNegative > riskValue ? true : false;

    setisResultVisible(true);
    setUseGreenhouse(useGreenhouse);
    setPercentages({
      positive: percentageOfPositive,
      negative: percentageOfNegative,
      neutral: percentageOfNeutrals,
    });
  };

  return {
    season,
    setSeason,
    plant,
    setPlant,
    setYesterdayWheather,
    setTodayWheather,
    setRiskValue,
    percentages,
    useGreenhouse,
    isClipboardVisible,
    setIsClipboardVisible,
    isResultVisible,
    filterWheaterFromSeason,
    getResults,
    resetView,
  };
};

export default useData;
