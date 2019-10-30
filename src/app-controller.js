import layout from "./frontend/layout"

export default class AppController {
  constructor(request, response) {
    this.request = request
    this.response = response
  }

  async index () {
    return layout('Hello world')
  }
}