export class Game {
  constructor(level) {
    this.level = level
  }
  increaseLevel() {
    this.level = this.level + 1
  }
}

export class Neighbourhood {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
}

export class Santa {
  constructor(posX, posY, giftsCarried) {
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
  constructor(name, wish, nbhX, nbhY) {    
    this.name = name;
    this.wish = wish;
    this.giftDelivered = false;
    this.posX = Math.floor(Math.random()*nbhX);
    this.posY = Math.floor(Math.random()*nbhY);
  }
}