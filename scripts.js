

const container = document.querySelector("#container");



//Creation of a x*y grid of divs
function gridCreation(numberSquares){
    
    const arrayLines = [];
    
    for(let i = 0; i < numberSquares; i++){
        const column = document.createElement("div");
        column.className = ("column");
        column.id = ("column");
        container.appendChild(column);

        for(let y = 0; y < numberSquares; y++){
            const lines = document.createElement("div");
            lines.classList.add("lines");
            lines.id = ("lines");
            column.appendChild(lines);
            lines.addEventListener("mouseover", () => {lines.style.backgroundColor=("#FF0000")});

            arrayLines.push(lines);    
        }   
    }
    return arrayLines;
}

const btnSize = document.querySelector("#btnSize");
btnSize.textContent=("New canvas");
btnSize.addEventListener("click", () => {changeSize()});

function changeSize(){
    let numberSquares = prompt("Enter the square size for the new grid");
    arrayLines = [];
    btnSize.addEventListener("click",gridCreation(numberSquares));
}

        // Need to know why is not working

// const squares = document.getElementsByClassName("#lines");

//     for(let i = 0; i < squares.length; i++){
//         squares[i].addEventListener("mouseover", () => {lines.style.backgroundColor=("#FF0000")});
//     }




    
   
