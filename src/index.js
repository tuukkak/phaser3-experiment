import { Game, AUTO, Scene } from 'phaser'

class MyScene extends Scene {
  preload() {
    console.log('preload')
  }

  create() {
    console.log('create')
  }
}

const config = {
  type: AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: new MyScene(),
}

const gameContainer = document.getElementById(config.parent)
let game = new Game(config)

if (module.hot) {
  module.hot.accept(() => {
    while (gameContainer.firstChild) {
      gameContainer.removeChild(gameContainer.firstChild)
    }
    game.boot()
  })
}
