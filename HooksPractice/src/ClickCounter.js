import React from 'react'
import CounterHOC from './CounterHOC'

function ClickCounter(props) {
  return (
      <>
      <h1>You clicked me {props.count}</h1>
      <button onClick={props.increment}>Increment</button>
      </>
  )
}

export default CounterHOC(ClickCounter);
