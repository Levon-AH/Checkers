import Phaser from 'phaser-ce'

export default class Checker extends Phaser.Group {
  constructor (color = 'white', type = 'checker', position = {x: 0, y: 1}) {
    super(Phaser.Game)
    this._color = color
    this._type = type
    this._position = position
  }

  get color () {
    return this._color
  }

  set color (value) {
    this._color = value
  }

  get type () {
    return this._type
  }

  set type (value) {
    this._type = value
  }

  get position () {
    return this._position
  }

  set position (value) {
    this._position = value
  }

  move (x, y) {
    this._position.x = x
    this._position.y = y
  }

  setQueen (position) {
    this._position = position
    this._type = 'queen'
  }
}
