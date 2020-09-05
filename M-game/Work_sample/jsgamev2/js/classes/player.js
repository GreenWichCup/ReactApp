
// Variables pour la gestion des mouvements, des changements d'armes
var defense = 0;
var attackButton = document.getElementById('attackButton');
var defendButton = document.getElementById('defendButton');
var infoTag = document.getElementById('console');
var infoAction = document.getElementsByTagName('p');
var attackParagraph;
var DIRECTION = {
    "DOWN": 0,
    "LEFT": 1,
    "RIGHT": 2,
    "UP": 3
};

var result = 0;
var actionRemaining = 3;
var turn = 1;
var stuffBlue = [];
var stuffRed = [];
var stuff = [stuffBlue, stuffRed]
var l = 0;
var m = 1;
var blueWeap = document.getElementById('blueWeapon');
var redWeap = document.getElementById('redWeapon');
var pv = [300, 300];

// variables pour l'insertion aléatoire des personnages
var playerArray = [];
var xPlayer, yPlayer;
var playerCoord;


//PV//
var infoActionRemaining = document.getElementsByTagName('h5');

//classe Joueur et  méthodes associées aux mouvements, combats et fonction tour à tour

class Player {
    constructor(url, direction) {
        // Chargement de l'image dans l'attribut image
        this.direction = direction;
        this.xPlayer = xPlayer;
        this.yPlayer = yPlayer;

        // attributs pour l'image
        this.skin = new Image();
        this.skin.refPlayer = this;
        this.skin.onload = function () {
            if (!this.complete)
                throw new Error("Erreur de chargement du tileset nommé \"" + url + "\".")
            this.refPlayer.largeur = this.width / 3;
            this.refPlayer.hauteur = this.height / 4;
        }
        this.skin.src = "sprites/" + url;
    }

    drawPlayer(canvas, l) {
        while (playerArray.length < 2) {
            xPlayer = 70 * (Math.floor(Math.random() * (xMap - min)));
            yPlayer = 70 * (Math.floor(Math.random() * (yMap - min)));
            playerCoord = [xPlayer, yPlayer];
            playerArray.push(playerCoord);


            //Eviter qu'un joueur apparaisse sur une case arme ou obstacle

            for (let i = 0; i < obstacleArray.length; i++) {
                if (playerCoord[0] === obstacleArray[i][0] && playerCoord[1] === obstacleArray[i][1]) {
                    playerArray.pop(playerCoord);
                }
                else if (Math.abs(playerCoord[0] - obstacleArray[i][0]) < 70) {
                    playerArray.pop(playerCoord);
                }
            };
            for (var j = 0; j < weaponArray.length; j++) {
                if (playerCoord[0] === weaponArray[j][0] && playerCoord[1] === weaponArray[j][1])
                    playerArray.pop(playerCoord);
            };
            for (var k = 0; k < playerArray.length - 1; k++) {
                if (playerCoord[0] === playerArray[k][0] && playerCoord[1] === playerArray[k][1]) {
                    playerArray.pop(playerCoord);
                }
                else if (Math.abs(playerCoord[0] - playerArray[k][0]) < 140 || Math.abs(playerCoord[1] - playerArray[k][1]) < 70) {
                    playerArray.pop(playerCoord);
                }
            };
        }
        canvas.drawImage(this.skin, 0, this.direction * this.hauteur, this.largeur, this.hauteur, (playerArray[l][0] - (this.largeur / 2) + 35), (playerArray[l][1] - this.hauteur + 60), this.largeur, this.hauteur);
    };

    nextMove(a, b, number, direction) {
        //Changement de la direction du personnnage			
        this.direction = direction;

        for (let i = 0; i < obstacleArray.length; i++) {
            if (playerArray[l][a] + number === obstacleArray[i][a] && playerArray[l][b] === obstacleArray[i][b]) {
                result = 1;
            }
        }

        for (let i = 0; i < playerArray.length; i++) {
            if (playerArray[l][a] + number === playerArray[m][a] && playerArray[l][b] === playerArray[m][b]) {
                {
                    result = 1;
                }

            }
        }
        if (result != 1) {
            playerArray[l][a] += number;
            actionRemaining--;
            infoActionRemaining[l].innerHTML = "Action(s) restante(s): " + actionRemaining;
        }
        else {
            result = 0;
        }

        for (let i = 0; i < weaponList.length; i++) {
            if (playerArray[l][0] === weaponArray[i][0] && playerArray[l][1] === weaponArray[i][1]) {
                stuff[l].push(weaponList[i]);
                weaponList.splice(i, 1, stuff[l][0]);
                stuff[l].shift();

                if (l === 0) {
                    blueWeap.src = stuff[l][0].image.src;
                }
                else if (l === 1) {
                    redWeap.src = stuff[l][0].image.src;
                }
            }
        }
    }

    action() {

        var degats;
        var lifePlayer = [];
        var lifeBlue = document.getElementById('pvBlue');
        var lifeRed = document.getElementById('pvRed');
        lifePlayer.push(lifeBlue, lifeRed);

        attackButton.addEventListener('click', function () {

            if (actionRemaining != 0) {
                if (((playerArray[l][0] + 70 === playerArray[m][0] && playerArray[l][1] === playerArray[m][1]) || (playerArray[l][1] + 70 === playerArray[m][1] && playerArray[l][0] === playerArray[m][0])) || ((playerArray[l][0] - 70 === playerArray[m][0] && playerArray[l][1] === playerArray[m][1]) || (playerArray[l][1] - 70 === playerArray[m][1] && playerArray[l][0] === playerArray[m][0]))) {
                    var weapAtt = stuff[l][0].image.src;

                    if (/dagger/.test(weapAtt) === true)
                        degats = 10;
                    if (/axe/.test(weapAtt) === true)
                        degats = 10;
                    if (/hammer/.test(weapAtt) === true)
                        degats = 15;    
                    if (/maul/.test(weapAtt) === true)
                        degats = 20;
                    if (/spear/.test(weapAtt) === true)
                        degats = 10;
                    if (/longbow/.test(weapAtt) === true)
                        degats = 15;
                    if (/longsword/.test(weapAtt) === true)
                        degats = 20;
                    if (/greatstaff/.test(weapAtt) === true)
                        degats = 25;
                    if (/greatsword/.test(weapAtt) === true)
                        degats = 30;

                    if (defense === 1) {
                        degats = degats / 2;
                        pv[m] -= degats;
                    }
                    else {
                        pv[m] -= degats;
                    }
                    if (pv[m] <= 0) {
                        lifePlayer[m].style.width = 0 + "px";
                    }
                    else {
                        lifePlayer[m].style.width = pv[m] + "px";
                    }
                    attackParagraph = document.createElement('h6');
                    infoTag.appendChild(attackParagraph);
                    var colorAttack = document.getElementsByTagName('h6');
                    attackParagraph.innerHTML = infoAction[l].innerHTML + " fait " + degats + " dégâts à " + infoAction[m].innerHTML;
                    infoTag.scrollTop = infoTag.scrollHeight;
                    if (l === 0) {
                        colorAttack[colorAttack.length - 1].style.color = 'blue';
                    }
                    else if (l === 1) {
                        colorAttack[colorAttack.length - 1].style.color = 'red';
                    }
                }
                actionRemaining--;
                infoActionRemaining[l].innerHTML = "Action(s) restante(s): " + actionRemaining;

            }
            defense = 0;

            if (pv[1] <= 0 || pv[0] <= 0) {
                var displayButton = document.getElementById('button');
                var winMsg = document.getElementById('winner');
                displayButton.style.display = 'none';
                winMsg.style.display = 'block';
                if (pv[1] <= 0) {
                    requestAnimationFrame(endBlue);

                } else if (pv[0] <= 0) {
                    requestAnimationFrame(endRed);
                }
                setTimeout(() => {
                    window.location.reload(true);
                }, 10000);
            }
        })
        defendButton.addEventListener('click', function () {
            defense = 1;
            actionRemaining = 0;
        });
    }

    turn() {
        if (((playerArray[l][0] + 70 === playerArray[m][0] && playerArray[l][1] === playerArray[m][1]) || (playerArray[l][1] + 70 === playerArray[m][1] && playerArray[l][0] === playerArray[m][0])) || ((playerArray[l][0] - 70 === playerArray[m][0] && playerArray[l][1] === playerArray[m][1]) || (playerArray[l][1] - 70 === playerArray[m][1] && playerArray[l][0] === playerArray[m][0]))) {
            if (actionRemaining > 1)
                actionRemaining = 1;
            attackButton.style.display = 'block';
            defendButton.style.display = 'block';
        }
        while (actionRemaining === 0) {
            if (((playerArray[l][0] + 70 === playerArray[m][0] && playerArray[l][1] === playerArray[m][1]) || (playerArray[l][1] + 70 === playerArray[m][1] && playerArray[l][0] === playerArray[m][0])) || ((playerArray[l][0] - 70 === playerArray[m][0] && playerArray[l][1] === playerArray[m][1]) || (playerArray[l][1] - 70 === playerArray[m][1] && playerArray[l][0] === playerArray[m][0]))) {
                infoActionRemaining[m].innerHTML = "Action(s) restante(s): 1 ";
            }

            else {
                infoActionRemaining[m].innerHTML = "Action(s) restante(s): 3 ";

            }
            turn++;
            if (turn % 2 === 0) {
                l = 1;
                m = 0;
            }
            else if (turn % 2 !== 0) {
                l = 0;
                m = 1;
            }

            if (((playerArray[l][0] + 70 === playerArray[m][0] && playerArray[l][1] === playerArray[m][1]) || (playerArray[l][1] + 70 === playerArray[m][1] && playerArray[l][0] === playerArray[m][0])) || ((playerArray[l][0] - 70 === playerArray[m][0] && playerArray[l][1] === playerArray[m][1]) || (playerArray[l][1] - 70 === playerArray[m][1] && playerArray[l][0] === playerArray[m][0]))) {
                actionRemaining = 1;
            }
            else {
                actionRemaining = 3;
            }
        }
    }
}

