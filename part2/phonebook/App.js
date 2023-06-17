import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personService'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [personsToShow, setPersonsToShow] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

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
    const person = { name: newName, number: newNumber }

    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      if (window.confirm(`${newName} is already added to the phonebook. Replace the old number with a new one?`)) {
        const id = persons.find(person => person.name.toLowerCase() === newName.toLowerCase()).id
        personService.update(id, person)
          .then(response => {
            console.log(response)
            const updatedList = persons.map(person => person.id !== id ? person : response.data)
            setPersons(updatedList)
            setPersonsToShow(updatedList)
            setNewName('')
            setNewNumber('')
            setErrorMessage(`Updated ${person.name}`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
          .catch((error) => setErrorMessage(error))
      }
    }

    else {
      personService.create(person)
        .then(response => {
          console.log(response)
          const updatedList = persons.concat(response.data)
          setPersons(updatedList)
          setPersonsToShow(updatedList)
          setNewName('')
          setNewNumber('')
          setErrorMessage(`Added ${person.name}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
        .catch((error) => setErrorMessage(error))
    }
  }


  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id)
        .then(response => {
          console.log(response)
          const updatedList = persons.filter(person => person.id != id)
          setPersons(updatedList)
          setPersonsToShow(updatedList)
          setErrorMessage(`Deleted ${name}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage(`Information of ${name} has already been removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          const updatedList = persons.filter(person => person.id != id)
          setPersons(updatedList)
          setPersonsToShow(updatedList)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h2>add a new</h2>

      <PersonForm addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />

    </div>
  )
}

export default App
