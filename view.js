Rectangle.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx) {
    // console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

function updateShapeList(shapes) {
    const shapeList = document.getElementById('shapeList');
    shapeList.innerHTML = '';
    shapes.forEach((shape, index) => {
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-default';
        button.innerHTML = '<span class="glyphicon glyphicon-remove-sign"></span>';
        button.onclick = () => {
            shapes.splice(index, 1); // delete shape from list
            updateShapeList(drawing.getForms());
            drawing.paint(ctx);
        };
        li.appendChild(button);
        let shapeInfo = document.createElement('span');
        shapeInfo.innerHTML = shape.constructor.name + ' (' + Math.round(shape.getInitX()) + ', '
            + Math.round(shape.getInitY()) + ', '
            + Math.round(shape.getFinalX()) + ', ' + Math.round(shape.getFinalY()) + ', Color: '
            + shape.getColor() + ', LineWidth: ' + shape.getLineWidth() + ')';
        li.appendChild(shapeInfo);
        shapeList.appendChild(li);
    });
}
