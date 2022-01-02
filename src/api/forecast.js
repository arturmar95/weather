export const getForecast = async (lat, lon) => {
  const url = `${process.env.REACT_APP_WEATHER_URL}forecast/?units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lat=${lat}&lon=${lon}`
  const res = await fetch(url)
  const data = await res.json()
  return data
} 