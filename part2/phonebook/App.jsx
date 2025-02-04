import { useEffect, useState } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchKey, setSearchKey] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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
    const existingPerson = persons.find(p => p.name === newName);
    if (existingPerson) {
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(existingPerson.id, newPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
      }
      return
    }
    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleSearchKey = (event) => {
    setSearchKey(event.target.value)
  }

  const deletePerson = (id, personName) => {
    console.log('id name', id, personName)
    if (confirm(`Delete ${personName} ?`)) {
      personService
        .deletePerson(id)
        .then(returnedPerson => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={searchKey} handleSearch={handleSearchKey} />
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber}
        handleNewName={handleNewName} handleNewNumber={handleNewNumber} handleAddNote={handleAddNote} />
      <h2>Numbers</h2>
      <Persons persons={searchPersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App