$(document).ready(function () {

    let puzzleParent = $("#puzzle");
    let puzzleItems = $(".puzzle-item");

    let field = $("#field");
    let fieldItems = $(".field-item");

    puzzleItems.each(function (item) {
        $(this).css('background', `url("img/british/britich${item + 1}.jpg") no-repeat center / cover`);
    });

    while (puzzleItems.length) {
        let randomIndexImg = Math.floor(Math.random() * puzzleItems.length);
        let temp = puzzleItems.splice(randomIndexImg, 1)[0];
        puzzleParent.append(temp);
    }

    // drag&drop

    function handleDragStart(e) {
        $(this).css('opacity', 0.5);
    }

    function handleDragEnd(e) {
        $(this).css('opacity', 1);
    }


    puzzleItems = $(".puzzle-item");

    puzzleItems.each(function () {
        this.addEventListener('dragstart', handleDragStart, false);
        this.addEventListener('dragend', handleDragEnd, false);
    })

    fieldItems.each(function () {
        this.addEventListener('dragover', handleDragOver, false);
        this.addEventListener('dragenter', handleDragEnter, false);
        this.addEventListener('dragleave', handleDragLeave, false);
    })

    //Task 2

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }

        e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

        return false;
    }

    function handleDragEnter(e) {
        $(e.target).addClass('over');
    }


    function handleDragLeave(e) {
        $(e.target).removeClass('over');
    }


})