'use strict'

var gCanvas;
var gCtx;
var gImgCtx;
var gImg;
var gAddCaption = 0


init()
function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    gImgCtx = gCanvas.getContext('2d');
    renderImags()
}
// רנדר גלריה
function renderImags() {
    var strImg = gImgs.map((img)=>{
        //  gMeme.selectedImgId=img.id
    return   `<img src="${img.src}"onclick="drawImgOnCanvas('${img.src}')"/>`  
    //    return` <article><img src="${img.src}" onclick="drawImgOnCanvas('${img.src}')"></img></article>`
    });
// console.log(gMeme.selectedImgId);
    document.querySelector('.grid-container').innerHTML = strImg
}



function drawImgOnCanvas(src) {
    var img = new Image()
    img.src = src;
    img.onload = function () {
        gImgCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    } 
     pageEditor()
}





function drawText(text, x, y) {
    if(gAddCaption>0){
        y+=160
        gMeme.lines.txt2=text
        console.log('hi',);
    }
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px Arial'
    // gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    console.log('hi');
    gCtx.strokeText(text, x, y)
    gCtx.save()
    gAddCaption++
    gMeme.selectedLineIdx=y
    gMeme.lines.txt=text
    gMeme.lines.size=gCtx.lineWidth
 
}

 function addLine(){
     document.getElementById('textInput1').value = '';
 }
 function deleteLine(){
    gAddCaption=0
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    var filt= gMeme.lines.filter((line) =>{
        console.log(filt, 'filt');
        return  line.txt=true
    })
}

// PAGES
function pageHome() {
    document.querySelector('.home').style.display = 'block'
    document.querySelector('.editor-screen').style.display = 'none'
}

function pageEditor() {
    document.querySelector('.editor-screen').style.display = 'block'
    document.querySelector('.home').style.display = 'none'
}

