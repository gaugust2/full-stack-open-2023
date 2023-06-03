import { useState } from 'react'

const Statistics = (props) => {
  if(props.total > 0){
    return (
      <div>
        <h1>statistics</h1>
        <p>good</p>{props.good}
        <p>neutral</p>{props.neutral}
        <p>bad</p>{props.bad}
        <p>total</p>{props.total}
        <p>average</p>{props.average}
        <p>positive</p>{props.positive}%
      </div>
    )
  }

  return (
    <div>
      <h2>No feedback given</h2>
    </div>
  )

  
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let total = good + neutral + bad;
  let average = (good - bad) / total;
  let positive = (good / total) * 100;

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <Statistics good={good} 
      neutral={neutral} 
      bad={bad} 
      total={total}
      average={average}
      positive={positive}
      />


    </div>
  )
}

export default App
