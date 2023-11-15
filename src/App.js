import { useState } from 'react'
import './App.css'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const newGoodCount = good + 1
    setGood(newGoodCount)
  }

  const handleNeutral = () => {
    const newNeutralCount = neutral + 1
    setNeutral(newNeutralCount)
  }

  const handleBad = () => {
    const newBadCount = bad + 1
    setBad(newBadCount)
  }

  const sum = good + neutral + bad
  return (
    <div>
      <p>give feedback</p>
      <button onClick={handleGood} id='good-button'>good</button>
      <button onClick={handleNeutral} id='neutral-button'>neutral</button>
      <button onClick={handleBad} id='bad-button'>bad</button>
      <p>statistics</p>
      
      {sum > 0 ? 
        <> {/*conditional rendering*/}
          good {good}<br/>
          neutral {neutral}<br/>
          bad {bad}<br/>
          all {sum}<br/>
          average {sum > 0 ? (good - bad) / sum : 'N/A'}<br/>
          positive {sum > 0 ? `${good/sum*100}%`: 'N/A'}<br/>
        </>
      : 
        <>
          No feedback given
        </>
      }
    </div>
)
}
export default App