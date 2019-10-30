import express from 'express'
import AppController from './app-controller'
import Bundler from 'parcel-bundler'

const bundler = new Bundler('./src/frontend/entry.jsx')

const app = express()
const port = 3000

app.use(bundler.middleware())

app.get('/', async (req, res) => {
  const html = await new AppController(req, res).index()
  res.send(html)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))