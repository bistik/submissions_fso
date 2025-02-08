const Country = ({country}) => {
    if (!country) {
        return null
    }
    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital.map(
                    capital => <span key={capital}>{capital}</span>
                )}
            </div>
            <div>area {country.area}</div>
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map(
                    lang => <li key={lang}>{lang}</li>
                )}
            </ul>
            <img src={country.flags.png} width="150px"/>
        </div>
    )
}

export default Country