import { useEffect, useState } from 'react'
import Search from './components/Search'
import countriesService from './services/countries'
import Countries from './components/Countries'
import Country from './components/Country'
import weatherService from './services/weather'
import Weather from './components/Weather'

const App = () => {
  const [searchCountry, setSearchCountry] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [selectedCountries, setSelectedCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    countriesService
      .getAll()
      .then(countries => {
        setAllCountries(countries)
      })
      .catch(error => {
        alert('Something went wrong')
        console.log('error getAll', error)
      })
  }, [])

  const convertToTitleCase = str => {
    return str.toLowerCase().split(' ').map(function (word) {
       return word.charAt(0).toUpperCase().concat(word.substr(1));
    }).join(' ');
  }

  const handleSearch = (event) => {
    const searchKey = event.target.value
    setSearchCountry(searchKey)
    const searchCountries = allCountries.filter(country => 
      country.includes(searchKey) || country.includes(convertToTitleCase(searchKey))
    )

    if (searchCountries.length > 1 && searchCountries.length <= 10) {
      setSelectedCountries(searchCountries)
      setSelectedCountry(null)
      setWeather(null)
    }
    if (searchCountries.length === 1) {
      handleShow(searchCountries[0])
    }
  }

  const handleShow = (country) => {
    countriesService
      .getCountry(country)
      .then(country => {
        const returnedCountry = country
        setSelectedCountry(returnedCountry)
        if (returnedCountry) {
          weatherService
            .getWeather({country: returnedCountry})
            .then(weather => {
                setWeather(weather)
            })
        }
        setSelectedCountries([])
      })
      .catch(error => {
        alert('Something went wrong')
        console.log('error getCountry', error)
      })
  }

  return (
    <div>
      <Search searchCountry={searchCountry} handleSearch={handleSearch} />
      <Countries countries={selectedCountries} handleShow={handleShow} />
      <Country country={selectedCountry} />
      <Weather weather={weather} country={selectedCountry} />
    </div>
  )
}

export default App
