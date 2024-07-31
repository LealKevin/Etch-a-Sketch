

const container = document.querySelector("#container");






//Creation of a x*y grid of divs
function gridCreation(numberSquares){

    for(let i = 0; i < numberSquares; i++){

        const numberColumn = document.createElement("div");
        numberColumn.className = ("column");

        const numberLines = document.createElement("div");
        numberLines.className = ("lines");

        document.querySelector("#container").appendChild(numberColumn);
        numberColumn.appendChild(numberLines);

    }
}







 // let autoScale = (480/numberOfSquares);

    // for(let i = 0; i < numberOfSquares; i++){
    //     const numberSquares = document.createElement("div");
    //     numberSquares.className = ("squares");

    //     numberSquares.style.width = (autoScale + "px");
    //     numberSquares.style.height = (autoScale + "px");


    //     document.querySelector("#container").appendChild(numberSquares);
    // }