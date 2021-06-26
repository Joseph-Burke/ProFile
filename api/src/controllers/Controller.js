export class Controller {
  constructor (name) {
    this.name = name
    this.index = (req, res) => res.send(`index of ${this.name}`)
    this.show = (req, res) => res.send(`${this.name} with id ${req.params.id}`)
    this.create = (req, res) => res.send(`create a new ${this.name}`)
    this.update = (req, res) => res.send(`update ${this.name} with id ${req.params.id}`)
    this.destroy = (req, res) => res.send(`delete ${this.name} with id ${req.params.id}`)
  }
}