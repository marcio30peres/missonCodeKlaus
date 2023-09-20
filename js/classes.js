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