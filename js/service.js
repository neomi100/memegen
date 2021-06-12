'use strict'

var gTextSize = 70
var gTextAlign = 'left'
var gfont = 'impac'



var gMeme = {
    selectedLineIdx: 0,
    lines: [{ txt: '', y: 150}]
}

function getem() {
    return gMeme
}
function textSize() {
    return gTextSize
}
function textAlign() {
    return gTextAlign
}
function font() {
    return gfont
}

function moveLine(num) {
    gMeme.lines[gMeme.selectedLineIdx].y += num
    render()
}

function alignment(manner) {
    switch (manner) {
        case 'right':
            gTextAlign = 'right'
            break;
        case 'center':
            gTextAlign = 'center'
            break;
        case 'left':
            gTextAlign = 'left'
            break;
    }
    render()
}
function fontStyle(font) {
    switch (font) {
        case 'impac':
            gfont = 'impac'
            break;
        case 'lator':
            gfont = 'lator'
            break;
        case 'chmpagana':
            gfont = 'chmpagana'
            break;
        case 'logo':
            gfont = 'logo'
            break;
    }
    render()
}

function fontSize(num) {
    if (num === 10) {
        gTextSize += num
        if (gTextSize > 150) gTextSize = 140
        render()
    }
    if (num === -10) {
        gTextSize += num
        if (gTextSize < 10) gTextSize = 20
        render()
    }
}

function trash() {
    // if(!gMeme.lines[0].isVisible){
    //     console.log('hi');
    //     drawLine(gMeme.lines[gMeme.selectedLineIdx].txt, 50, gMeme.lines[gMeme.selectedLineIdx].y) 
    // }
    // if(!gMeme.lines[1].isVisible){
    //     console.log('hi2');
    //     drawLine(gMeme.lines[gMeme.selectedLineIdx].txt, 50, gMeme.lines[gMeme.selectedLineIdx].y) 
    // }
    gCurrSrc = currSrs()
    gCanvas = canvas()
    gCtx = ctx()
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    drawImgOnCanvas(gCurrSrc)
    gMeme.selectedLineIdx = 0
    for (var i = 0; i < gMeme.lines.length; i++) {
        gMeme.lines[i].txt = ''
    }
}

function getText(text, x, y) {
    gCurrSrc = currSrs()
    gCanvas = canvas()
    gCtx = ctx()
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    drawImgOnCanvasTwo(gCurrSrc)
    gMeme.lines[gMeme.selectedLineIdx].txt = text
    if (gMeme.lines[gMeme.selectedLineIdx].y !== null) {
        y = gMeme.lines[gMeme.selectedLineIdx].y
    } else {
        gMeme.lines[gMeme.selectedLineIdx].y = y
    }
    for (var i = 0; i < gMeme.lines.length; i++) {
        if (gMeme.selectedLineIdx !== i) {
            drawLine(gMeme.lines[i].txt, x, gMeme.lines[i].y)
        } else {
            drawLine(text, x, gMeme.lines[gMeme.selectedLineIdx].y)
        }
    }
}



