'use strict'

var gImgs = [{ id: 1, src: 'images/1.jpg' },
{ id: 2, src: 'images/2.jpg' },
{ id: 3, src: 'images/3.jpg' },
{ id: 4, src: 'images/4.jpg' },
{ id: 5, src: 'images/5.jpg' },
{ id: 6, src: 'images/6.jpg' },
{ id: 7, src: 'images/7.jpg' },
{ id: 8, src: 'images/8.jpg' },
{ id: 9, src: 'images/9.jpg' },
{ id: 10, src: 'images/10.jpg' },
{ id: 11, src: 'images/11.jpg' },
{ id: 12, src: 'images/12.jpg' },
{ id: 13, src: 'images/13.jpg' },
{ id: 14, src: 'images/14.jpg' },
{ id: 15, src: 'images/15.jpg' },
{ id: 16, src: 'images/16.jpg' },
{ id: 17, src: 'images/17.jpg' },
{ id: 18, src: 'images/18.jpg' },
];
var gCanvas;
var gCtx;
var gCurrSrc;
var gStrokeColor = 'black'
var gFillColor = 'white'
var gY_list = []
var gY_val


function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderImags()
}

function renderImags() {
    var strImg = gImgs.map((img) => {
        return `<img src="${img.src}"onclick="drawImgOnCanvas('${img.src}')"/>`
    });
    document.querySelector('.grid-container').innerHTML = strImg.join('')
}

function drawImgOnCanvas(src) {
    var img = new Image()
    img.src = src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
    gCurrSrc = img.src
    pageEditor()
}

function currSrs() {
    return gCurrSrc
}
function canvas() {
    return gCanvas
}
function ctx() {
    return gCtx
}

function drawImgOnCanvasTwo(src) {
    var img = new Image()
    img.src = src;
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    gCurrSrc = img.src
}

function render() {
    gMeme = getem()
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    drawImgOnCanvasTwo(gCurrSrc)
    for (var i = 0; i < gMeme.lines.length; i++) {
        drawLine(gMeme.lines[i].txt, 50, gMeme.lines[i].y)
    }
}

function drawLine(text, x, y) {
    gTextSize = textSize()
    gTextAlign = textAlign()
    gfont = font()
    gCtx.lineWidth = 4
    gCtx.strokeStyle = gStrokeColor
    gCtx.fillStyle = gFillColor
    gCtx.font = `${gTextSize}px  ${gfont}`
    gCtx.textAlign = gTextAlign
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function addLine() {
    gMeme=getem()   
    if (gMeme.lines.length > 3) {
        gY_val  = gCanvas.height*0.50
        gY_list[gMeme.lines.length-1] = gY_val
    } else {
            switch (gMeme.lines.length)
                {
                case 1:
                    gY_val  = gCanvas.height*0.90
                    gY_list[gMeme.lines.length-1] = gY_val
                break;
                case 2:
                    gY_val  = gCanvas.height*0.55
                    gY_list[gMeme.lines.length-1] = gY_val
                break;
                default:
            }
    }
    gMeme.lines.push({ txt: '', y: gY_val})
    document.getElementById('textInput1').value = '';
    gMeme.selectedLineIdx++
}

function changeFocusLine() {
    gMeme = getem()
    gMeme.selectedLineIdx += 1
    gMeme.selectedLineIdx = gMeme.selectedLineIdx % gMeme.lines.length
    gMeme.selectedLineIdx = gMeme.selectedLineIdx
    document.getElementById('textInput1').value = gMeme.lines[gMeme.selectedLineIdx].txt;
}

function onMoveLine(num) {
    moveLine(num)
}
function onFontSize(num) {
    fontSize(num)
}
function onAlignment(manner) {
    alignment(manner)
}
function onFontStyle(font) {
    fontStyle(font)
}
function onTrash() {
    trash()
}
function color(position, color) {
    if (position === 'srtoke')
        gStrokeColor = color
    if (position === 'fill')
        gFillColor = color
    render()
}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'meme-gen'
}

function toggleMenu() {
    console.log('hi');
    document.querySelector('.main-nav').classList.toggle('menu-open');
}

// PAGES
function pageHome() {
    document.querySelector('.home').style.display = 'block'
    document.querySelector('.editor-screen').style.display = 'none'
}

function pageEditor() {
    gMeme = getem()
    gMeme.selectedLineIdx = 0
    document.getElementById('textInput1').value = '';
    document.querySelector('.editor-screen').style.display = 'block'
    document.querySelector('.home').style.display = 'none'
    for (var i = 0; i < gMeme.lines.length; i++) {
        gMeme.lines[i].txt = ''
    }
}

