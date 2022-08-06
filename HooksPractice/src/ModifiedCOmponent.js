import React from 'react'
import HigherOrder from './HigherOrder'

function ModifiedCOmponent() {
  return (
    <h1>
        I am modified
    </h1>
  )
}

export default HigherOrder(ModifiedCOmponent);