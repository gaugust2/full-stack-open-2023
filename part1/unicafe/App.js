import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  let total = good + neutral + bad;
  let average = (good - bad) / total;
  let positive = (good/total)*100;

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>

      <h1>statistics</h1>

      <p>good</p>{good}
      <p>neutral</p>{neutral}
      <p>bad</p>{bad}
      <p>total</p>{total}
      <p>average</p>{average}
      <p>positive</p>{positive}%
    </div>
  )
}

export default App
