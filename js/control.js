'use strict'

var gCanvas;
var gCtx;
var gImg;
// init()
init()
function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
}

function drawImgOnCanvas(src) {
    var img = new Image()
    img.src = src;
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}

function getImg(img) {
    console.log('img',img);
    gImg = img.id
    console.log(gImg);
    drawImgOnCanvas(gImg)

}


// function drawImgOnCanvas(){
//    var elImg= document.querySelector('img');
//     gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height) 

// }


// function drawImage(ev) {

//     var offsetX = ev.offsetX
//     var offsetY = ev.offsetY
//     drawImgOnCanvas(offsetX,offsetY)
// }



//     if (gTouchEvs.includes(ev.type)) {
//         ev.preventDefault()
//         ev = ev.changedTouches[0]
//         var pos = {
//             x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//             y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
//         }
//         offsetX = pos.x
//         offsetY = pos.y
//     }
    // switch (gCurrShape) {
    //     case 'triangle':
    //         drawTriangle(offsetX, offsetY)
    //         break;
    //     case 'rect':
    //         drawRect(offsetX, offsetY)
    //         break;
    //     case 'circle':
    //         drawArc(offsetX, offsetY)
    //         break;
    // }
