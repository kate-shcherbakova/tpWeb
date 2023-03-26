// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

class Drawing {
    constructor() {
        this.forms = [];
    }

    addForm(form) {
        this.forms.push(form);
    }

    getForms() {
        return this.forms;
    }
}

// Shape
class Form {
    constructor(color, lineWidth) {
        this.color = color;
        this.lineWidth = lineWidth;
    }

    getColor() {
        return this.color;
    }

    getLineWidth() {
        return this.lineWidth;
    }
}

class Rectangle extends Form {
    constructor(initX, initY, finalX, finalY, color, lineWidth) {
        super(color, lineWidth);
        this.initX = initX;
        this.initY = initY;
        this.finalX = finalX;
        this.finalY = finalY;
    }

    getInitX() {
        return this.initX;
    }

    getInitY() {
        return this.initY;
    }

    getFinalX() {
        return this.finalX;
    }

    getFinalY() {
        return this.finalY;
    }
}

class Line extends Form {
    constructor(initX, initY, finalX, finalY, color, lineWidth) {
        super(color, lineWidth);
        this.initX = initX;
        this.initY = initY;
        this.finalX = finalX;
        this.finalY = finalY;
    }

    getInitX() {
        return this.initX;
    }

    getInitY() {
        return this.initY;
    }

    getFinalX() {
        return this.finalX;
    }

    getFinalY() {
        return this.finalY;
    }

}




