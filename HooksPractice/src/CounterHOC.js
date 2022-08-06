import React, { useState } from 'react'

export default function CounterHOC(OriginalComp) {
  const NewComp = function NewCompoenent(){
    const [count,setCount] = useState(0);
    function increment(){
        setCount(count+1);
    }
    return(
        <>
        <OriginalComp count={count} increment={increment}/>
        </>
    )
  }
  
    return NewComp;
}
