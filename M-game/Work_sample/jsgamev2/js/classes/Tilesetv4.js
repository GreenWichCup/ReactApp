var numbWeap = prompt('Choose number of weapons (1 to 6)')
var chooseFont = parseInt(prompt('Choose background. 1: brown, 2: green'))
var xMap = 10
var yMap = 6
var min = 0
var obstacleArray = []
var weaponArray = []
var xRandom, yRandom, object

class Tileset {
  constructor(url) {
    // Chargement de l'image dans l'attribut image
    this.image = new Image()
    this.image.onload = function () {
      // Largeur du tileset en tiles
      if (!this.complete)
        throw new Error('Erreur de chargement du tileset nommé "' + url + '".')
    }
    this.image.src = 'tilesets/' + url
  }

  // Méthode de dessin de la carte sans aucun éléments du jeu
  drawFont(canvas) {
    var xCanvas
    var yCanvas

    for (let i = 0; i < 6; i++) {
      yCanvas = i * 70

      for (let j = 0; j < 10; j++) {
        xCanvas = j * 70
        canvas.drawImage(this.image, xCanvas, yCanvas, 70, 70)
      }
    }
  }
  // Méthode de dessin des obstacles aux coordonnées aléatoires
  drawObstacle(canvas) {
    while (obstacleArray.length < 8) {
      xRandom = 70 * Math.floor(Math.random() * (xMap - min))
      yRandom = 70 * Math.floor(Math.random() * (yMap - min))
      object = [xRandom, yRandom]
      obstacleArray.push(object)
      for (let i = 0; i < obstacleArray.length - 1; i++) {
        if (
          object[0] === obstacleArray[i][0] &&
          object[1] === obstacleArray[i][1]
        )
          obstacleArray.pop(object)
      }
    }
    for (let k = 0; k < obstacleArray.length; k++) {
      canvas.drawImage(
        this.image,
        obstacleArray[k][0],
        obstacleArray[k][1],
        70,
        70,
      )
    }
  }
  // Méthode de dessin des armes aux coordonnées aléatoires
  drawWeapon(canvas, k) {
    while (weaponArray.length < numbWeap) {
      var xWeapon = 70 * Math.floor(Math.random() * (xMap - min))
      var yWeapon = 70 * Math.floor(Math.random() * (yMap - min))
      var weapCoord = [xWeapon, yWeapon]
      weaponArray.push(weapCoord)

      //Eviter qu'une arme apparaisse aux mêmes coordonnées qu'un obstacle ou soit bloquée par des obstacles

      for (let i = 0; i < obstacleArray.length; i++) {
        if (
          weapCoord[0] === obstacleArray[i][0] &&
          weapCoord[1] === obstacleArray[i][1]
        )
          weaponArray.pop(weapCoord)
      }
      for (var j = 0; j < weaponArray.length - 1; j++) {
        if (
          weapCoord[0] === weaponArray[j][0] &&
          weapCoord[1] === weaponArray[j][1]
        ) {
          weaponArray.pop(weapCoord)
        }
      }
    }
    canvas.drawImage(
      this.image,
      weaponArray[k][0] + 10,
      weaponArray[k][1] + 10,
      50,
      50,
    )
  }
}
