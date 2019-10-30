import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './components/app'

export default (helloMessage) => {

  const GLOBAL_STATE = {
    text: helloMessage,
  }

  const application = (
    <App globalState={GLOBAL_STATE}/>
  )

  const html = renderToString(application)

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <script>
      GLOBAL_STATE = ${JSON.stringify(GLOBAL_STATE)};
      </script>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Hello Bulma!</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="./entry.js"></script>
    </body>
  </html>
  `
}