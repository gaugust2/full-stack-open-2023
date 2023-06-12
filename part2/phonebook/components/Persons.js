const Person = ({person}) => <div>{person.name}{person.number}</div>

const Persons = ({personsToShow}) => {
    return (
        <div>
            {personsToShow.map(person => {
                return (
                    <Person person={person}/>
                )
            })}
        </div>
    )
}
export default Persons
