import { useEffect, useState } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchKey, setSearchKey] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data) 
      })
  }

  useEffect(hook, [])

  const searchPersons = searchKey ? persons.filter(p => p.name.includes(searchKey)) : persons

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleAddNote = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber }
    if (persons.filter(p => p.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleSearchKey = (event) => {
    setSearchKey(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={searchKey} handleSearch={handleSearchKey} />
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber}
        handleNewName={handleNewName} handleNewNumber={handleNewNumber} handleAddNote={handleAddNote} />
      <h2>Numbers</h2>
      <Persons persons={searchPersons} />
    </div>
  )
}

export default App