import React from 'react'
import CounterHOC from './CounterHOC'
import HigherOrder from './HigherOrder'

function HoverCOunter(props) {
  return (
      <>
      <h1 onMouseOver={props.increment}>You Clicked me {props.count}</h1>
      </>
  )
}
export default HigherOrder(CounterHOC(HoverCOunter))
