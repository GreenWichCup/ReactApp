//Canvas
var weaponList = new Array()
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

// Map elements (armes, obstacles,...//
var wall = new Tileset('wall.png')
var fontMap

var urlName = 'http://localhost/jsgamev2/js/object.json'

ajaxGet(urlName, function (response) {
  // Transforme la réponse en un tableau d'armes
  var libMap = JSON.parse(response)
  console.log(libMap)
  console.log(weaponArray)

  if (chooseFont === 1) {
    fontMap = new Tileset(libMap.jsonMapFont[0].terre)
  } else if (chooseFont === 2) {
    fontMap = new Tileset(libMap.jsonMapFont[1].herbe)
  }

  for (let i = 0; i < numbWeap; i++) {
    var newWeap = new Tileset(libMap.jsonWeap[i].url)
    weaponList.push(newWeap)
  }
  console.log(chooseFont)
  console.log(libMap.jsonMapFont[1].herbe)
})

var weapBlue = new Tileset('dagger.png')
var weapRed = new Tileset('dagger.png')

// Players
var playerBlue = new Player('P1.png', DIRECTION.DOWN)
var playerRed = new Player('P2.png', DIRECTION.DOWN)
var playerTurn = new Array()
playerTurn.push(playerBlue, playerRed)

//Tableaux regroupant les armes
stuffBlue.push(weapBlue)
stuffRed.push(weapRed)

//Animation fin de partie

var winRed = new AnimPerso('Win_mage.png')
var winBlue = new AnimPerso('Win_warrior.png')

function endBlue() {
  winBlue.drawSprite(ctx)
  requestAnimationFrame(endBlue)
}

function endRed() {
  winRed.drawSprite(ctx)
  requestAnimationFrame(endRed)
}

//Execution des méthodes de classe dans des fonctions Event onload et keydown

window.onload = function () {
  canvas.width = xMap * 70
  canvas.height = yMap * 70

  ctx.imageSmoothingEnabled = false
  // Gestion du clavier

  window.onkeydown = function (event) {
    var e = event || window.event
    var key = e.which || e.keyCode

    if (
      (playerArray[l][0] + 70 === playerArray[m][0] &&
        playerArray[l][1] === playerArray[m][1]) ||
      (playerArray[l][1] + 70 === playerArray[m][1] &&
        playerArray[l][0] === playerArray[m][0]) ||
      (playerArray[l][0] - 70 === playerArray[m][0] &&
        playerArray[l][1] === playerArray[m][1]) ||
      (playerArray[l][1] - 70 === playerArray[m][1] &&
        playerArray[l][0] === playerArray[m][0])
    ) {
      event.preventDefault()
    } else if (key === 13) {
      actionRemaining = 0
      infoActionRemaining[l].innerHTML =
        'Action(s) restante(s): ' + actionRemaining
      event.preventDefault()
    } else {
      switch (key) {
        case 38: // Flèche haut, z, w, Z, W
          if (playerArray[l][1] > 0) {
            playerTurn[l].nextMove(1, 0, -70, DIRECTION.UP)
          }

          break
        case 40: // Flèche bas, s, S
          if (playerArray[l][1] < 350) {
            playerTurn[l].nextMove(1, 0, +70, DIRECTION.DOWN)
          }

          break
        case 37: // Flèche gauche, q, a, Q, A
          if (playerArray[l][0] > 0) {
            playerTurn[l].nextMove(0, 1, -70, DIRECTION.LEFT)
          }
          break
        case 39: // Flèche droite, d, D
          if (playerArray[l][0] < 630) {
            playerTurn[l].nextMove(0, 1, +70, DIRECTION.RIGHT)
          }
          break

        default:
          //alert(key);
          // Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
          return true
      }
      return false
    }
  }

  setInterval(function () {
    fontMap.drawFont(ctx)
    wall.drawObstacle(ctx)
    for (let i = 0; i < weaponList.length; i++) {
      weaponList[i].drawWeapon(ctx, i)
    }
    for (let i = 0; i < playerTurn.length; i++) {
      playerTurn[i].drawPlayer(ctx, i)
      playerTurn[i].turn()
    }
  }, 40)
  playerTurn[l].action()
}
