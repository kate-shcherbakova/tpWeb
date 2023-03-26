// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'
    this.initX = 0;
    this.initY = 0;
    this.finalX = 0;
    this.finalY = 0;
    this.isMoving = false;


    // Developper les 3 fonctions gérant les événements
    function onMouseDown(evt) {
        this.isMoving = true;
        this.initX = getMousePosition(canvas, evt).x;
        this.initY = getMousePosition(canvas, evt).y;
        interactor.onInteractionStart(this);
        // console.log(`Начало: x=${this.initX}, y=${this.initY}`);
    }

    function onMouseMove(evt) {
        if (this.isMoving) {
            this.finalX = getMousePosition(canvas, evt).x;
            this.finalY = getMousePosition(canvas, evt).y;
            interactor.onInteractionUpdate(this);
            // console.log(`Перемещение: x=${this.finalX}, y=${this.finalY}`);
        }
    }

    function onMouseUp(evt) {
        interactor.onInteractionEnd(this);
        this.isMoving = false;
        // console.log(`Завершение: x=${this.finalX}, y=${this.finalY}`);
        this.initX = 0;
        this.initY = 0;
        this.finalX = 0;
        this.finalY = 0;
    }

    // Associer les fonctions précédentes aux évènements du canvas.
    // Связываем созданные функции с соответствующими событиями мыши на холсте.
    canvas.addEventListener('mousedown', onMouseDown.bind(this));
    canvas.addEventListener('mousemove', onMouseMove.bind(this));
    canvas.addEventListener('mouseup', onMouseUp.bind(this));
};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left, y: evt.clientY - rect.top
    };
};


