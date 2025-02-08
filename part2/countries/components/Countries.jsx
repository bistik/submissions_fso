const Countries = ({countries}) => {
    if (countries.length > 1 && countries.length <= 10) {
        return (
            <div>
                {countries.map(country =>
                    <div key={country}>{country}</div>
                )}
            </div>
        )
    }
    return null
}

export default Countries