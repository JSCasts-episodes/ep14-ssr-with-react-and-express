import React, { useState } from 'react'

const DynamicBox = (props) => {
  const { text } = props
  const [counter, setCounter] = useState(0)
  return(
    <div className="container">
      <h1 className="title">
        {text}, AwesomeMeter: {counter}
      </h1>
      <p className="subtitle">
        <button
          onClick={() => setCounter(counter+1)}
          className="button"
        >
          it is awesome
        </button>
      </p>
    </div>
  )
}

export default DynamicBox