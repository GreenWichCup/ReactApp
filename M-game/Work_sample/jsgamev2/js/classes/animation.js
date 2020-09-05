
var DUREE_ANIMATION = 18;
var DUREE_DEPLACEMENT = 120;

class AnimPerso {
    constructor(url) {
        this.image = new Image();
        this.etatAnimation = 0;
        this.image.referenceDuPerso = this;
        this.image.onload = function () {
            if (!this.complete)
                throw "Erreur de chargement du sprite nommé \"" + url + "\".";

            // Taille du personnage
            this.referenceDuPerso.largeur = this.width / 12;
            this.referenceDuPerso.hauteur = this.height;
        }
        this.image.src = "sprites/" + url;
    }

    drawSprite(ctxBlue) {
        var frame = 0; // Numéro de l'image à prendre pour l'animation

        if (this.etatAnimation >= DUREE_DEPLACEMENT) {
            // Si le déplacement a atteint ou dépassé le temps nécéssaire pour s'effectuer, on le termine
            this.etatAnimation = 0;
        } else if (this.etatAnimation >= 0) {
            // On calcule l'image (frame) de l'animation à afficher
            frame = Math.floor(this.etatAnimation / DUREE_ANIMATION);

            if (frame > 12) {
                frame = 0;
            }
            this.etatAnimation++;
        }
        ctxBlue.clearRect(0, 0, xMap*70, yMap*70)
        ctxBlue.drawImage(this.image, this.largeur * frame, 0, this.largeur, this.hauteur, 280, 200, 250, 250);
    }
}

