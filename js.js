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

    /*function handleDragStart(e) {
        $(this).css('opacity', 0.5);
    }*/

    function handleDragEnd(e) {
        $(this).css('opacity', 1);
    }


    puzzleItems = $(".puzzle-item");

    puzzleItems.each(function () {
        this.addEventListener('dragstart', handleDragStart, false);
        this.addEventListener('dragend', handleDragEnd, false);
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

    fieldItems.each(function () {
        this.addEventListener('dragover', handleDragOver, false);
        this.addEventListener('dragenter', handleDragEnter, false);
        this.addEventListener('dragleave', handleDragLeave, false);

        this.addEventListener('dragstart', handleDragStart, false);
        this.addEventListener('dragend', handleDragEnd, false);
        this.addEventListener('drop',handleDrop, false);
    })

//Task 3

    let dragSrcEl = null;

    function handleDragStart(e) {
        // Target (this) element is the source node.
        $(this).css('opacity', 0.5);

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDrop(e) {
        // this/e.target is current target element.

        if (e.stopPropagation) {
            e.stopPropagation(); // Stops some browsers from redirecting.
        }

        // Don't do anything if dropping the same column we're dragging.
        if (dragSrcEl != this) {
            // Set the source column's HTML to the HTML of the columnwe dropped on.
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }

        return false;
    }

/*    function handleDrop(e) {
        // this / e.target is current target element.

        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }

        // See the section on the DataTransfer object.

        return false;
    }



}

    var cols = document.querySelectorAll('#columns .column');
    [].forEach.call(cols, function(col) {
        col.addEventListener('drop', handleDrop, false);
        col.addEventListener('dragend', handleDragEnd, false);
    });*/

})