import React from 'react'
import ClickCounter from './ClickCounter'
import Counter from './Counter'
import HoverCOunter from './HoverCOunter'

export default function Counters() {
  return (
    <>
    <h1>I am Counters</h1>
    <Counter>
        {(count,increment)=><ClickCounter count={count} increment={increment}/>}
    </Counter>
    </>
  )
}

// <Counter render={(count,increment)=><HoverCOunter count={count} increment={increment}/>}/>
//     <Counter render={(count,increment)=><ClickCounter count={count} increment={increment}/>}/>
    
