
// דרך להכניס את האירוע 
// var textInput1 = document.getElementById('textInput1');
// textInput1.addEventListener('input',function(){
// })


// function rederText(text){
//     document.getElementById("text1").innerHTML = text;
// }

// .text-box {
//     width: 200px;
//     height: 50px;
//     position: absolute;
//     top: 50px;
//     left: 37px;
//     border: 1px dashed black;
// }


// {/* <article class="box img-1" id='images/1.jpg' onclick="getImg(this)"></article> */}

// <!-- <article class="box img-1" id='images/1.jpg' onclick="getImg(this)"></article>
// <article class="box img-2" id='images/2.jpg' onclick="getImg(this)"></article>
// <article class="box img-3" id='images/3.jpg' onclick="getImg(this)"></article>
// <article class="box img-4" id='images/4.jpg' onclick="getImg(this)"></article>
// <article class="box img-5" id='images/5.jpg' onclick="getImg(this)"></article>
// <article class="box img-6" id='images/6.jpg' onclick="getImg(this)"></article>
// <article class="box img-7" id='images/7.jpg' onclick="getImg(this)"></article>
// <article class="box img-8" id='images/8.jpg' onclick="getImg(this)"></article>
// <article class="box img-9" id='images/9.jpg' onclick="getImg(this)"></article>
// <article class="box img-10" id='images/10.jpg' onclick="getImg(this)"></article>
// <article class="box img-11" id='images/11.jpg' onclick="getImg(this)"></article>
// <article class="box img-12" id='images/12.jpg' onclick="getImg(this)"></article>
// <article class="box img-13" id='images/13.jpg' onclick="getImg(this)"></article>
// <article class="box img-14" id='images/14.jpg' onclick="getImg(this)"></article>
// <article class="box img-15" id='images/15.jpg' onclick="getImg(this)"></article>
// <article class="box img-16" id='images/16.jpg' onclick="getImg(this)"></article>
// <article class="box img-17" id='images/17.jpg' onclick="getImg(this)"></article>
// <article class="box img-18" id='images/18.jpg' onclick="getImg(this)"></article> -->


// <!-- name='images/1.jpg' onclick="getImg(this)" -->

// function getImg(img) {
//     gImg = img.id
//     drawImgOnCanvas(gImg)
//     pageEditor()
// }

canvas = document.getElementById("cvs");
context = canvas.getContext('2d');

// create an object containing the top-right lines
// the object contains its path points & if it is visible or not
var a = {
    path: [10, 10, 300, 10, 300, 300],
    isVisible: false,
}

// create an object containing the left-bottom lines
// the object contains its path points & if it is visible or not
var b = {
    path: [10, 10, 10, 300, 300, 300],
    isVisible: false,
}

// an array containing all the line-path objects
var myObjects = [a, b];

// clear the entire canvas 
// redraw any line-paths that are visible
function redrawAll(myObjects) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < myObjects.length; i++) {
        if (myObjects[i].isVisible) {
            drawLinePath(myObjects[i]);
        }
    }
}

// redraw 1 line-path
function drawLinePath(theObject) {
    var points = theObject.path;
    // save the current untranslated context state
    context.save();

    // draw lines through each point in the objects path
    context.translate(0.5, 0.5);
    context.beginPath();
    context.setLineDash([2, 10]);
    context.moveTo(points[0], points[1]);
    for (var i = 2; i < points.length; i += 2) {
        context.lineTo(points[i], points[i + 1]);
    }
    context.stroke();

    // restore the context to its untranslated state
    context.restore();
}

// use buttons to set & clear the visibility flags on objects
// In all cases, clear the entire canvas and redraw any visible objects

$("#reDrowA").on("click", function () {
    a.isVisible = true;
    redrawAll(myObjects);
});
$("#reDrowB").on("click", function () {
    b.isVisible = true;
    redrawAll(myObjects);
});
$("#clearA").on("click", function () {
    a.isVisible = false;
    redrawAll(myObjects);
});
$("#clearB").on("click", function () {
    b.isVisible = false;
    redrawAll(myObjects);
});


