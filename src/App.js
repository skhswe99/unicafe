import { useState } from 'react'
import './App.css'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick} id={text}>
      {text}
    </button>
  )
}
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
      
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>
      <p>statistics</p>
      
      {sum > 0 ? 
        <ul> {/*conditional rendering*/}
          <li>good {good}</li>
          <li>neutral {neutral}</li>
          <li>bad {bad}</li>
          <li>all {sum}</li>
          <li>average {sum > 0 ? (good - bad) / sum : 'N/A'}</li>
          <li>positive {sum > 0 ? `${good/sum*100}%`: 'N/A'}</li>
        </ul>
      : 
        <p>
          No feedback given
        </p>
      }
    </div>
)
}
export default App