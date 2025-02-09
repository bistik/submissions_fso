import axios from "axios"

const baseUrl = "https://api.openweathermap.org/data/2.5/weather"
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY

const getWeather = ({country}) => {
    if (!country) {
        return null
    }
    const [ lat, lng ] = country.latlng
    const request = axios.get(`${baseUrl}?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`)
    return request.then(response => response.data)
}

export default { getWeather }