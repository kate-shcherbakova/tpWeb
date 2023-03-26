var editingMode = {rect: 0, line: 1};

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#000000';
    this.currentShape = null;

    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    var editingModeRect = document.getElementById('butRect');
    var editingModeLine = document.getElementById('butLine');
    var lineWidthInput = document.getElementById('spinnerWidth');
    var colourInput = document.getElementById('colour');

    editingModeRect.addEventListener('change', (event) => {
        // console.log("MODE rect ", event.target.value);
        this.currEditingMode = 0;
    });

    editingModeLine.addEventListener('change', (event) => {
        // console.log("MODE line ", event.target.value);
        this.currEditingMode = 1;
    });

    lineWidthInput.addEventListener('change', (event) => {
        // console.log("VALUE ", event.target.value);
        this.currLineWidth = event.target.value;
    });

    colourInput.addEventListener('change', (event) => {
        this.currColour = event.target.value;
    });

    new DnD(canvas, this);

    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function (dnd) {
        lineWidthInput.dispatchEvent(new Event('change'));

        if (this.currEditingMode === editingMode.rect) {
            this.currentShape = new Rectangle(dnd.initX, dnd.initY, 0, 0, this.currColour, this.currLineWidth);
        } else {
            this.currentShape = new Line(dnd.initX, dnd.initY, dnd.initX, dnd.initY, this.currColour, this.currLineWidth);
            // console.log("START ", this.currentShape);
        }
        drawing.addForm(this.currentShape);
        drawing.paint(ctx);
    };

    this.onInteractionUpdate = function (dnd) {
        if (this.currEditingMode === editingMode.rect) {
            this.currentShape.finalX = dnd.finalX - dnd.initX;
            this.currentShape.finalY = dnd.finalY - dnd.initY;
        } else {
            this.currentShape.finalX = dnd.finalX;
            this.currentShape.finalY = dnd.finalY;
            // console.log("UPDATE ", this.currentShape);
        }
        drawing.paint(ctx);
    };

    this.onInteractionEnd = function (dnd) {
        if (this.currEditingMode === editingMode.line) {
            this.currentShape.finalX = dnd.finalX;
            this.currentShape.finalY = dnd.finalY;
            // console.log("END ", this.currentShape);

        }
        drawing.paint(ctx);
        updateShapeList(drawing.getForms());
        this.currentShape = null;
    };
}
