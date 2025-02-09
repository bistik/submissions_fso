const imgBaseUrl = 'http://openweathermap.org/img/wn/'
const Weather = ({weather, country}) => {
    if (!weather) {
        return null
    }
    const [weatherDesc] = weather.weather
    return (
        <div>
            <h2>Weather in {country.capital.map(
                    capital => <span key={capital}>{capital}</span>
                )}
            </h2>
            <div>temperature {weather.main.temp} Celcius</div>
            <img src={imgBaseUrl + weatherDesc.icon + '@2x.png'} />
            <div>wind {weather.wind.speed} m/s</div>
        </div>
    )
}

export default Weather