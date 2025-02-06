import { useState } from 'react'
import Search from './components/Search'

const App = () => {
  const [searchCountry, setSearchCountry] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [selectedCountries, setSelectedCountries] = useState([])

  const handleSearch = (event) => {
    setSearchCountry(event.target.value)
    console.log("handleSearch")
  }

  return (
    <div>
      <Search searchCountry={searchCountry} handleSearch={handleSearch} />
    </div>
  )
}

export default App
