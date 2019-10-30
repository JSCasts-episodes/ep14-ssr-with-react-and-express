import React from 'react'

import DynamicBox from './dynamic-box'

const App = (props) => {
  const { globalState } = props
  const { text } = globalState
  return (
    <section className="section">
      <DynamicBox text={text} />
    </section>
  )
}

export default App