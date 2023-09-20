export class Game {
  constructor(level) {
    this.level = level
    this.nGifts = 1
    this.nChildren = 1
    this.nDogs = 0
  }
  increaseLevel() {
    this.level = this.level + 1
    this.nGifts = this.nGifts + 1
    this.nChildren = this.nChildren + 1
    this.nDogs = this.nDogs + 1
  }
  loose() {
    // finish when Santa's bitten
  }
  win() {
    // Coangrats the winner
  }
}

export class Neighbourhood {
  constructor(el, width, height) {
    this.el = el
    this.width = width
    this.height = height
  }
}

export class Santa {
  constructor(el, posX, posY, giftsCarried) {
    this.el = el
    this.posX = posX
    this.posY = posY
    this.giftsCarried = giftsCarried
  }
  moveUp() {
    this.posY = this.posY + 1
  }
  moveDown() {
    this.posY = this.posY - 1
  }
  moveRight() {
    this.posX = this.posX + 1
  }
  moveLeft() {
    this.posX = this.posX - 1
  }
  pickGift() {
    this.giftsCarried = this.giftsCarried + 1
  }
  deliverGift() {
    this.giftsCarried = this.giftsCarried + 1
  }
}

export class Child {
  constructor(el, name, wish, nbhX, nbhY) {
    this.el = el
    this.name = name
    this.wish = wish
    this.giftDelivered = false
    this.posX = Math.floor(Math.random() * nbhX)
    this.posY = Math.floor(Math.random() * nbhY)
  }
}

export class Gift {
  constructor(el, nbhX, nbhY, content) {
    this.el = el
    this.posX = Math.floor(Math.random() * nbhX)
    this.posY = Math.floor(Math.random() * nbhY)
    this.content = content
  }
}

export class Dog {
  constructor(el, posX, posY) {
    this.el = el
    this.posX = posX
    this.posY = posY
  }
  moveUp() {
    this.posY = this.posY + 1
  }
  moveDown() {
    this.posY = this.posY - 1
  }
  moveRight() {
    this.posX = this.posX + 1
  }
  moveLeft() {
    this.posX = this.posX - 1
  }
  bite(game) {
    game.loose()
  }
  move(santaX, santaY, game) {
    if (this.posX == santaX && this.posY == santaY) {
      this.bite(game)
    } else {
      if (this.posX < santaX) {
        this.moveRight()
      } else {
        this.moveLeft()
      }
      if (this.posY < santaY) {
        this.moveUp()
      } else {
        this.moveDown()
      }
    }
  }
}
