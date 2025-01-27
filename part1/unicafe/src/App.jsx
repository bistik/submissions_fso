import { useState } from 'react'

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const total = good + neutral + bad
  if (total > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
        <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + bad + neutral} />
        <StatisticLine text="average" value={(good * 1 + bad * -1) / total} />
        <StatisticLine text="positive" value={(good / total) * 100 + '%'} />
        </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>
    <h1>statistics</h1>
    No feedback given
    </div>
  )
}
const StatisticLine = ({value, text}) => {
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralFeedback = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadFeedback = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleGoodFeedback} />
      <Button text="neutral" handleClick={handleNeutralFeedback} />
      <Button text="bad" handleClick={handleBadFeedback} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App