'use strict'

var gImgs = [{ id: 1, src: 'images/1.jpg', keywords: ['happy'], isVisible: true },
{ id: 2, src: 'images/2.jpg', keywords: ['happy'] },
{ id: 3, src: 'images/3.jpg', keywords: ['happy'] },
{ id: 4, src: 'images/4.jpg', keywords: ['happy'] },
{ id: 5, src: 'images/5.jpg', keywords: ['happy'] },
{ id: 6, src: 'images/6.jpg', keywords: ['happy'] },
{ id: 7, src: 'images/7.jpg', keywords: ['happy'] },
{ id: 8, src: 'images/8.jpg', keywords: ['happy'] },
{ id: 9, src: 'images/9.jpg', keywords: ['happy'] },
{ id: 10, src: 'images/10.jpg', keywords: ['happy'] },
{ id: 11, src: 'images/11.jpg', keywords: ['happy'] },
{ id: 12, src: 'images/12.jpg', keywords: ['happy'] },
{ id: 13, src: 'images/13.jpg', keywords: ['happy'] },
{ id: 14, src: 'images/14.jpg', keywords: ['happy'] },
{ id: 15, src: 'images/15.jpg', keywords: ['happy'] },
{ id: 16, src: 'images/16.jpg', keywords: ['happy'] },
{ id: 17, src: 'images/17.jpg', keywords: ['happy'] },
{ id: 18, src: 'images/18.jpg', keywords: ['happy'] },
];

var gKeywords = { 'happy': 12, 'funny puk': 1 }



var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    // קאונטר
    lines: [
        {
            txt: 'I never eat Falafel',
            isVisible: true,
            size: 2,
            align: 'left',
            color: 'red'
        },
        {
            txt: '',
            isVisible: true,
            size: 2,
            align: 'left',
            color: 'red'
        }
    ]
}


// const gMeme = {
//     lines: [
//         {
//             text: 'daasd',
//             size: 19
//         },
//         {
//             text: 'text2',
//                 size: 23
//         }
//     ]
// }

// how to use 

// first item
gMeme.lines[0].text
gMeme.lines[0].size
// second item
gMeme.lines[1].text
gMeme.lines[1].size


