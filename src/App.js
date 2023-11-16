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
    <>
      <td>{text}</td><td>{value}</td>
    </>
  )
}
const Statistics = (props) => {
  return(
    <table>
      <tbody>
        <tr><StatisticLine text='good' value={props.good} /></tr>
        <tr><StatisticLine text='neutral' value={props.neutral} /></tr>
        <tr><StatisticLine text='bad' value={props.bad} /></tr>
        <tr><StatisticLine text='all' value={props.sum} /></tr>
        <tr><StatisticLine text='average' value={(props.good - props.bad)/props.sum} /></tr>
        <tr><StatisticLine text='positive' value={`${props.good/props.sum*100}%`} /></tr>
        </tbody>
    </table>
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
        <> {/*conditional rendering*/}
            <Statistics good={good} neutral={neutral} bad={bad} sum={sum} />
        </>
      : 
        <p>
          No feedback given
        </p>
      }
    </div>
)
}
export default App