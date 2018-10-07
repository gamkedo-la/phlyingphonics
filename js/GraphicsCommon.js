// GraphicsCommon.js is brought over from We Must Prepare
// Same file with minor modifications as the GraphicsCommon.js in We Must Prepare
// Contains commonly used functions to draw stuff to the canvas

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}


function colorCircleWithTransparency(centerX, centerY, radius, fillColor, transparency) {
    canvasContext.fillStyle = fillColor;
    canvasContext.globalAlpha = transparency;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
    canvasContext.globalAlpha = 1;
}

// Accepted formats for fillColorAlpha: standard named color string (alpha = 1) or [r,g,b,a]
//Used in conjunction with the ParticleRenderer
function colorCircleAlpha(centerX, centerY, radius, fillColorAlpha) {
    // Support for the default named colors like "purple"
    if (Array.isArray(fillColorAlpha) === false) {
        canvasContext.fillStyle = fillColorAlpha;
    } else {
        canvasContext.fillStyle = "rgba(" + fillColorAlpha[0] + "," + fillColorAlpha[1] + "," + fillColorAlpha[2] + "," + fillColorAlpha[3] + ")";
    } //generate the color from the rgba array

    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true); //Début, fin, horaire ou anti horaire
    canvasContext.fill();
}

function outlineCircle(centerX, centerY, radius, strokeColor, lineWidth = 1) {
    canvasContext.strokeStyle = strokeColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.setLineDash([]);
    canvasContext.lineWidth = lineWidth;
    canvasContext.stroke();
}

function drawBitmapCenteredAtLocationWithRotation(graphic, atX, atY, withAngle = 0) {
    canvasContext.save(); // allows us to undo translate movement and rotate spin
    canvasContext.translate(atX, atY); // sets the point where our graphic will go
    canvasContext.rotate(withAngle); // sets the rotation
    canvasContext.drawImage(graphic, -graphic.width / 2, -graphic.height / 2); // center, draw
    canvasContext.restore(); // undo the translation movement and rotation since save()
}

function coloredOutlineRectCornerToCorner(corner1X, corner1Y, corner2X, corner2Y, lineColor, lineWidth = 1) {
    canvasContext.beginPath();
    canvasContext.strokeStyle = lineColor;
    canvasContext.lineWidth = lineWidth;
    canvasContext.rect(corner1X, corner1Y, corner2X - corner1X, corner2Y - corner1Y);
    canvasContext.stroke();
}

function colorText(text, textLineX, textLineY, color, fontInfo, shadowColor="black", shadowOffsetX=0, shadowOffsetY=0, shadowBlur=0) {
    if (!fontInfo) fontInfo = "11px Arial"; // default
    canvasContext.font = fontInfo;
    canvasContext.shadowColor = shadowColor;
    canvasContext.shadowOffsetX = shadowOffsetX;
    canvasContext.shadowOffsetY = shadowOffsetY;
    canvasContext.shadowBlur = shadowBlur;
    canvasContext.fillStyle = color;
    canvasContext.fillText(text, textLineX, textLineY);
    canvasContext.shadowOffsetX = 0;
    canvasContext.shadowOffsetY = 0;
    canvasContext.shadowBlur = 0;
}

function colorTextCentered(text, textLineX, textLineY, color, fontInfo) {
    if (!fontInfo) fontInfo = "11px Arial"; // default
    canvasContext.save();
    canvasContext.font = fontInfo;
    canvasContext.fillStyle = color;
    canvasContext.textAlign = 'center';
    canvasContext.textBaseline = 'middle';
    canvasContext.fillText(text, textLineX, textLineY);
    canvasContext.restore();
}

function Sprite(imageIn, widthIn, heightIn) {
    let image = imageIn;
    let width = widthIn;
    let height = heightIn;

    //These save division operations when drawing to increase performance at the cost of memory
    let halfWidth = width / 2;
    let halfHeight = height / 2;

    this.draw = function (atX, atY) {
        canvasContext.drawImage(image, atX - halfWidth, atY - halfHeight);
    };

    this.drawExtended = function (atX, atY, withAngle = 0, flipped = false, scale = 1, alpha = 1) {
        canvasContext.save();

        canvasContext.translate(atX, atY);
        canvasContext.rotate(withAngle);
        canvasContext.scale(flipped ? -scale : scale, scale);
        canvasContext.globalAlpha = alpha;

        canvasContext.drawImage(image, -halfWidth, -halfHeight);

        canvasContext.restore();
    };

    this.getDimensions = function () {
        return { width: width, height: height };
    };
}

function SpriteSheet(sheetIn, colWidth, rowHeight) {
    let sheet = sheetIn;
    let width = colWidth;
    let height = rowHeight;

    //These save division operations when drawing to increase performance at the cost of memory
    let halfWidth = width / 2;
    let halfHeight = height / 2;

    this.draw = function (atX, atY, col, row) {
        canvasContext.drawImage(sheet,
            col * width, row * height,
            width, height,
            atX - halfWidth, atY - halfHeight,
            width, height);
    };

    this.drawExtended = function (atX, atY, row, col, withAngle = 0, flipped = false, scale = 1, alpha = 1) {
        canvasContext.save();

        canvasContext.translate(atX, atY);
        canvasContext.rotate(withAngle);
        canvasContext.scale(flipped ? -scale : scale, scale);
        canvasContext.globalAlpha = alpha;

        canvasContext.drawImage(sheet,
            col * width, row * height,
            width, height,
            -halfWidth, -halfHeight,
            width, height);

        canvasContext.restore();
    };

    this.getDimensions = function () {
        return { width: width, height: height };
    };
}

function Animation(sheetIn, colWidth, rowHeight, sheetInFrames, animationInRowIndex, frameTickRate, looping) {
    let spriteSheet = new SpriteSheet(sheetIn, colWidth, rowHeight);
    let numberOfFrames = sheetInFrames;
    let animationIndex = 0;
    let tickCount = 0;
    let ticksPerFrame = frameTickRate;
    let loop = looping;
    let rowIndex = animationInRowIndex;

    this.draw = function (atX, atY) {
        spriteSheet.draw(atX, atY, animationIndex, rowIndex);
    };

    this.update = function () {
        tickCount++;
        if (tickCount > ticksPerFrame) {
            tickCount = 0;
            // if the current frame index is in range
            if (animationIndex < numberOfFrames - 1) {
                animationIndex++; // go to the next frame
            } else if (loop) {
                animationIndex = 0;
            }
        }
    };

    this.drawExtended = function (atX, atY, withAngle = 0, flipped = false, scale = 1, alpha = 1) {
        spriteSheet.draw(atX, atY, animationIndex, rowIndex, withAngle, flipped, scale, alpha);
    };

    this.getDimensions = function () {
        return spriteSheet.getDimensions();
    };

    this.getCurrentFrame = function () {
        return animationIndex;
    };

    this.getNumberOfFrames = function () {
        return numberOfFrames;
    };

    this.isFinishedPlaying = function () {
        return (loop == false && animationIndex >= numberOfFrames - 1)
    };

    this.reset = function () {
        animationIndex = 0;
    };

    this.setFinished = function () {
        animationIndex = numberOfFrames - 1;
    };
}
