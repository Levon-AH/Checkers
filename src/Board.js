/* eslint-disable no-undef,no-unused-vars,no-array-constructor */

import Checker from './Checker'
import Phaser from 'phaser-ce'
const STARTX = 410
const STARTY = 400
export default class Board extends Phaser.Group {
  constructor () {
    super(Phaser.Game)
    this._checker = new Checker()
    this._checkers = new Array()
  }

  get checker () {
    return this._checker
  }

  set checker (value) {
    this._checker = value
  }

  setCheckers (matrix) {
    let ch = this._checker
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
          ch.color = 'white'
          ch.position.x = i
          ch.position.y = j
          this._checkers.push(ch)
        }
        if (matrix[i][j] === 2) {
          this._checker.color = 'black'
          this._checker.position.x = i
          this._checker.position.y = j
          this._checkers.push(this._checker)
        }
      }
    }
  }

  setChecker (x, y) {
    this._checker.position.x = x
    this._checker.position.y = y
  }
}
