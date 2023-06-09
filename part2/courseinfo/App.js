const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ parts }) => {
  let total = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)
  return(
    <div>
      <b>total of {total} exercises</b>
    </div>
  )
}
const Part = ({ name, exercises }) =>
  <p>
    {name} {exercises}
  </p>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
      ))}
    </div>
  )
}

const Course = ({ course }) =>
  <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts}/>
  </>

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App
