import { fetchWeatherApi } from "openmeteo";
import config from "../config/env.config";
import getEncodedURI from "../utils/getEncodedURI";
import getQueryParams from "../utils/getQueryParams";

const { baseUrl, dailyVar } = config;
console.log(dailyVar.toString());

async function fetchData(weatherInputs) {
  const queryParams = `${getQueryParams(
    weatherInputs
  )}daily=${dailyVar.toString()}`;

  const encodedQueryParams = getEncodedURI(queryParams);

  try {
    const response = await fetch(`${baseUrl}${encodedQueryParams}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const fetchData2 = async (weatherInputs) => {
  const { latitude, longitude, startDate, endDate } = weatherInputs;

  const params = {
    latitude,
    longitude,
    start_date: startDate,
    end_date: endDate,
    daily: dailyVar,
    format: "json"
  };

  try {
    const response = await fetchWeatherApi(baseUrl, params);
    console.log(response[0].daily());
  } catch (error) {
    console.log(error);
  }
};

export  {fetchData, fetchData2};
