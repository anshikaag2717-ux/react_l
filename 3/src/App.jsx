import React from 'react'
import button from './components/button/button'
import header from './components/header/header'

const App = () => {
  return (
    <div>
      {button()}
      {header()}
    </div>
  )
}

export default App