export const fetchWeatherData = async (latitude, longitude) => {
  const URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=10`

  const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
}