import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

const application = (
  <App globalState={GLOBAL_STATE}/>
)

ReactDOM.hydrate(application, document.getElementById('root'))