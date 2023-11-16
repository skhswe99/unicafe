import { useState } from 'react'
import './App.css'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick} id={text}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <li>{text} {value}</li>
  )
}
const Statistics = (props) => {
  return(
    <ul>
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={props.sum} />
      <StatisticLine text='average' value={(props.good - props.bad)/props.sum} />
      <StatisticLine text='positive' value={`${props.good/props.sum*100}%`} />
    </ul>
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
          {/* <li>good {good}</li>
          <li>neutral {neutral}</li>
          <li>bad {bad}</li>
          <li>all {sum}</li>
          <li>average {(good - bad) / sum }</li>
          <li>positive {`${good/sum*100}%`}</li> */}
          <Statistics good={good} neutral={neutral} bad={bad} sum={sum} />
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