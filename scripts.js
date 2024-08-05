
const container = document.querySelector("#container");

// Button to change the backgroundcolor

const btnChangeBackgroundColor = document.querySelector("#btnChangeBackgroundColor");
btnChangeBackgroundColor.textContent = ("Change backgound color");

btnChangeBackgroundColor.addEventListener("input", changeBackgroundColor);

function changeBackgroundColor(event){

    let squares = document.querySelectorAll(".lines")

    squares.forEach(square => {
    square.style.backgroundColor = event.target.value;
    });
}






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

            arrayLines.push(lines);    

        }   
    }
    return arrayLines;
}

 // Switch Rainbow mode
 let rainbowYesNo = false;
 
const btnRainbow = document.querySelector("#btnRainbow");
btnRainbow.textContent = ("Rainbow");

btnRainbow.addEventListener("change", () => {

    rainbowYesNo = btnRainbow.checked;
});
 
// Button that reset the grid and create a new one 

const btnSize = document.querySelector("#btnSize");
btnSize.textContent=("New canvas");
btnSize.addEventListener("click", () => {changeSize()});

function changeSize(){
    let numberSquares = prompt("Enter the square size for the new grid");
    if(numberSquares <= 100 && numberSquares >0){
        while (container.firstChild){
            container.removeChild(container.firstChild);
        }
        const squares = gridCreation(numberSquares);
        squares.forEach(squares => {
        squares.addEventListener("mouseover", () => changeColor(squares))});
        }
    else{
        alert("The grid size need to be betwenn 0 and 100")
    }
    }
  

// Opacity changer
let opacityMode = false;

const btnOpacity = document.querySelector("#btnOpacity");

btnOpacity.addEventListener("change", () => {
    opacityMode = btnOpacity.checked;
})

function opacityChanger(element){

    element.style.backgroundColor=("black")
    element.style.opacity = parseFloat(element.style.opacity) + 0.1;

}

// Erase mode

let eraseMode = false;
const btnErase = document.querySelector("#btnErase");

btnErase.addEventListener("change", () => {
    eraseMode = btnErase.checked;
})

function eraseChanger(element){
    element.style.opacity=("0");
    element.style.backgroundColor=("white");
}


// Change color

function changeColor(element) {

    if(!element.style.opacity){
        element.style.opacity=("0");
    }

    if(rainbowYesNo){
        const hue = (Math.floor(Math.random() * 360));
        element.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        element.style.opacity=("1");
    }

    else if(opacityMode){
        opacityChanger(element); 
    }

    else if(eraseMode){
        eraseChanger(element);
        
    }

    else{
        const btnColor = document.querySelector("#btnChangeColor");
        const btnColorValue = btnColor.value;
        element.style.backgroundColor=(btnColorValue);
        element.style.opacity=("1");}
    
}

document.addEventListener("DOMContentLoaded", () => {
    const squares = gridCreation(64);
    squares.forEach(square => {
    square.addEventListener("mouseover", () => changeColor(square))}
   )});







    
   
