import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchKey, setSearchKey] = useState('')

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