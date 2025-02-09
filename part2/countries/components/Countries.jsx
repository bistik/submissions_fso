const Countries = ({countries, handleShow}) => {
    if (countries.length > 1 && countries.length <= 10) {
        return (
            <div>
                {countries.map(country =>
                    <div key={country}>
                        {country}
                        <button onClick={() => handleShow(country)}>show</button>
                    </div>
                )}
            </div>
        )
    }
    return null
}

export default Countries