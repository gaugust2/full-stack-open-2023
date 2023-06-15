import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personService'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsToShow, setPersonsToShow] = useState([])

  useEffect(() => {
    personService.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setPersonsToShow(response.data)
      })
  }, [])



  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setFilter(event.target.value)
    setPersonsToShow(persons.filter((person) => person.name.toLowerCase().includes(event.target.value)))
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) alert(`${newName} is already added to phonebook`)

    else {
      const person = { name: newName, number: newNumber }

      personService.create(person)
        .then(response => {
          console.log(response)
          setPersons(persons.concat(response.data))
          setPersonsToShow(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  
  const deletePerson = (id, name) => {
    if(window.confirm(`Delete ${name}?`)){
      personService.remove(id)
      .then(response => {
        console.log(response)
        const updatedList = persons.filter(person => person.id != id)
        setPersons(updatedList)
        setPersonsToShow(updatedList)
      })
      .catch(error => {
        console.log('fail')
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h2>add a new</h2>

      <PersonForm addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson}/>

    </div>
  )
}

export default App
