/* eslint-disable no-unused-vars,standard/object-curly-even-spacing */
import 'pixi'
import 'p2'
import Board from './Board'
import Phaser from 'phaser-ce'

// eslint-disable-next-line no-unused-vars

let matrix = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 2, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 2, 0, 2, 0]
]
let game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', {preload: preload, create: create })
function preload () {
  console.log('preload')
  game.load.image('ground', 'assets/images/Background.png')
  game.load.image('dask', 'assets/images/dask.png')
  game.load.image('01', 'assets/images/01.png')
  game.load.image('02', 'assets/images/02.png')
  game.load.image('03', 'assets/images/03.png')
  game.load.image('04', 'assets/images/04.png')
  game.load.image('zoom', 'assets/images/zoom.png')
}
let dask
function create () {
  console.log('create')
  let ground = game.add.sprite(0, 0, 'ground')
  ground.scale.setTo(3, 3)
  let zoom = game.add.sprite(1830, 20, 'zoom')
  zoom.scale.setTo(0.1, 0.1)
  zoom.inputEnabled = true
  game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT
  zoom.events.onInputDown.add(gofull, this)
  dask = game.add.sprite(game.world.centerX / 1.5 , game.world.centerY / 2 , 'dask')
  let board = new Board()
  board.setCheckers(matrix)
  console.log(board._checkers)
}

function gofull () {
  if (game.scale.isFullScreen) {
    game.scale.stopFullScreen()
  } else {
    game.scale.startFullScreen(false)
    dask.scale.setTo(1, 1)
  }
}
