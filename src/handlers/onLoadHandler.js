import { fetchWeatherData } from "../api/getWheatherData.js"
import data from "../data.js"
import dom from "../dom.js"
import {renderDay} from '../components/renderDay.js'
import {renderHeader} from '../components/renderHeader.js'

export const onLoadHandler = async () => {
  const container = dom.container;

  const location = data.location;
  const latitude = location.lattitude;
  const longitude = location.longitude;
  const city = location.city;

  try {
    const data = await fetchWeatherData(latitude, longitude);
    console.log(data);
    const time = data.hourly.time;
    const temperature = data.hourly.temperature_2m;

    const renderedHeader = renderHeader(city);
    container.append(renderedHeader)

    const numberOfDays = Math.ceil(time.length / 24);
    console.log(numberOfDays);
    for (let i = 0; i < numberOfDays; i++) {
      const start = i * 24;
      const end = start + 24;
      const slicedTime = time.slice(start, end);
      const slicedTemperature = temperature.slice(start, end);
      const renderedDay = renderDay(slicedTime, slicedTemperature);
      container.append(renderedDay)
      }
    }
    

   catch (error) {
    console.error('Error fetching weather data:', error);
  }
}