let puzzleParent=$("#puzzle");
let puzzleItems = $(".puzzle-item");

let filed=$("#filed");
let filedItems=$(".filed-item");

$(function () {
    puzzleItems.each(function (item) {
        $(this).css('background', `url("img/british/britich${item+1}.jpg") no-repeat center / cover`);
    });
});

$(function () {
    while (puzzleItems.length) {
        let randomImg=Math.floor(Math.random() * puzzleItems.length);
        puzzleParent.append(puzzleItems.splice(randomImg, 1)[0]);
    }
});