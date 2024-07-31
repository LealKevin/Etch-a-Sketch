

const container = document.querySelector("#container");






//Creation of a x*y grid of divs
function gridCreation(numberSquares){



    for(let i = 0; i < numberSquares; i++){

        const column = document.createElement("div");
        column.className = ("column");
        column.id = ("column");
        container.appendChild(column);

            for(let y = 0; y < numberSquares; y++){
            const lines = document.createElement("div");
            lines.className = ("lines");

            column.appendChild(lines);
        }
    }

    
    
   

    //     document.querySelector("#container").appendChild(numberColumn);


    //  
    
}







 // let autoScale = (480/numberOfSquares);

    // for(let i = 0; i < numberOfSquares; i++){
    //     const numberSquares = document.createElement("div");
    //     numberSquares.className = ("squares");

    //     numberSquares.style.width = (autoScale + "px");
    //     numberSquares.style.height = (autoScale + "px");


    //     document.querySelector("#container").appendChild(numberSquares);
    // }