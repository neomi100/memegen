'use strict'

var gCanvas;
var gCtx;
var gImgCtx;
var gImg;
var gAddCaption = 0

var gTxtSize = 20



init()
function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    gImgCtx = gCanvas.getContext('2d');
    renderImags()

}
// רנדר גלריה
function renderImags() {
    var strImg = gImgs.map((img) => {
        // console.log(gMeme.selectedImgId);
        gMeme.selectedImgId = img.id
        return `<img src="${img.src}"onclick="drawImgOnCanvas('${img.src}')"/>`
        //    return` <article><img src="${img.src}" onclick="drawImgOnCanvas('${img.src}')"></img></article>`
    });
    // console.log(gMeme.selectedImgId);
    document.querySelector('.grid-container').innerHTML = strImg.join('')
}

var gCurrSrc;

function drawImgOnCanvas(src) {
    var img = new Image()
    img.src = src;
    img.onload = () => {

        gImgCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
    
    gCurrSrc = img.src
    pageEditor()
}


function drawText(text, x, y) {

    if (gAddCaption === 1) {
        y += 160
        gMeme.lines[1].txt = text
        console.log('hi', gMeme.lines[1].txt, gAddCaption);
    }
    if (gAddCaption === 2) {
        y = 130

    }
    // getIndex()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${gTxtSize}px Arial`
    // gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    gCtx.save()

    gMeme.selectedLineIdx = y
    gMeme.lines[0].txt = text
    // console.log('hi',gMeme.lines.txt);
    // gMeme.lines.size=gCtx.lineWidth
    console.log(gMeme.lines[0].txt = text, 'first');

}

function fontSize() {

}

function minusSize(num) {
    deleteLine()
    gTxtSize += num
    if(gTxtSize < 10) gTxtSize = 20
    console.log(gTxtSize);
}
function plusSize(num) {
    deleteLine()
    gTxtSize += num
    console.log(gTxtSize);

}

function addLine() {
    document.getElementById('textInput1').value = '';
    gAddCaption++
    gMeme.selectedLineIdx = gAddCaption
}
function deleteLine() {
    console.log(gCurrSrc);
    // console.log(gImgs[gMeme.selectedImgId]);
    drawImgOnCanvas(gCurrSrc)
    // gAddCaption=0
    // // console.log('hihi',gAddCaption);
    // gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    // var filt= gMeme.lines.filter((line) =>{
    //     console.log(filt, 'filt');
    //     return  line.txt=true
    // })
}

// PAGES
function pageHome() {
    document.querySelector('.home').style.display = 'block'
    document.querySelector('.editor-screen').style.display = 'none'
}

function pageEditor() {
    document.getElementById('textInput1').value = '';
    document.querySelector('.editor-screen').style.display = 'block'
    document.querySelector('.home').style.display = 'none'
}


