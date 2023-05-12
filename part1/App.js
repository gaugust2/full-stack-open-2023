const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.name}

      </h1>
    </div>
  )
}

const Part = (prop) => {
  return (
    <div>
      <p>
        {prop.name} {prop.exercises}
      </p>
    </div>
  )
}

const Content = (prop) => {
  console.log(prop.parts[2].exercises);
  return (
    <div>
      <Part
        name = {prop.parts[0].name}
        exercises = {prop.parts[0].exercises}
      />
      <Part
        name = {prop.parts[1].name}
        exercises = {prop.parts[1].exercises}
      />
      <Part
        name = {prop.parts[2].name}
        exercises = {prop.parts[2].exercises}
      />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  var total = 0;
  props.parts.forEach(element => {
    total += element.exercises;
  });
  return (
    <div>
      <p>
        Number of exercises {total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    
    </div>
  )
}
//<Content name={course}/>
//<Total name={name} age={age} />
export default App
