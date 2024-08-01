

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
 
// Button that reset the grid and create a new one 

const btnSize = document.querySelector("#btnSize");
btnSize.textContent=("New canvas");
btnSize.addEventListener("click", () => {changeSize()});

function changeSize(){
    let numberSquares = prompt("Enter the square size for the new grid");
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    btnSize.addEventListener("click",gridCreation(numberSquares));
}

// Button to change the backgroundcolor

const btnChangeBackgroundColor = document.querySelector("#btnChangeBackgroundColor");
btnChangeBackgroundColor.textContent = ("Change backgound color");

btnChangeBackgroundColor.addEventListener("input", changeBackgroundColor);

function changeBackgroundColor(event){

    let squares = document.querySelectorAll(".lines")

    squares.forEach(square => {
    square.style.backgroundColor = event.target.value;
    });

    console.log(squares);
}





    
   
