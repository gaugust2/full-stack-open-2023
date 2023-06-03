import { useState } from 'react'

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if(total > 0){
    return (
      <div>
        <h1>statistics</h1>
        <table>
        <StatisticLine text="good " value={good}/>
        <StatisticLine text="neutral " value={neutral}/>
        <StatisticLine text="bad " value={bad}/>
        <StatisticLine text="total " value={total}/>
        <StatisticLine text="average " value={average}/>
        <StatisticLine text="positive " value={positive}/>
        </table>
      </div>
    )
  }

  return (
    <div>
      <h2>No feedback given</h2>
    </div>
  )
}

const Button = ({handleClick, text}) => (
      <button onClick={handleClick}>{text}</button>
)

const StatisticLine = (props) => (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
)

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

      <Button handleClick={() => setGood(good+1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral"/> 
      <Button handleClick={() => setBad(bad+1)} text="bad"/>    

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
