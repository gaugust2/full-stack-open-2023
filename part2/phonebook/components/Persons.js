const Person = ({person, deletePerson}) => <div>{person.name} {person.number}<button onClick={() => deletePerson(person.id, person.name)}>delete</button></div>

const Persons = ({personsToShow, deletePerson}) => {
    return (
        <div>
            {personsToShow.map(person => {
                return (
                    <Person person={person} deletePerson={deletePerson}/>
                )
            })}
        </div>
    )
}
export default Persons
