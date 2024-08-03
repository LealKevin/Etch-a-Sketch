
// Create a grid x*x
    // - deleting the older one
    // - creating a new one

// Input to change the background color

// Input (type color) to change the "brush color"

// input "on/off", to create a "rainbow" effect
//     -hsl ((0+i), 30%, 30%)

// Input type "slider" 0 to 100 to change the oppacity of the brush
//     needs to add the oppacity value to previous oppacity value ex: 10% + 10% = 20%

// gridCreation(creates and return divs)

// btn to toggle on off rainbow mode

// changeColor(){
//     while or for(rainbow on){
//         squares.style.backgroundColor=("hsl ((0+i), 30%, 30%)")
//     }

//         squares.style.backgroundColor=("value of the input brush color")
        
// }

// alldivs.addEventListener("mouseover, changeColor()")




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

// Button to change brush color



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
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    const squares = gridCreation(numberSquares);
    squares.forEach(squares => {
    squares.addEventListener("mouseover", () => changeColor(squares))});
    }

// Opacity changer

function opacityChanger(){
    let opacity = document.querySelector("#opacity");
    let opacityValue = opacity.value;
    console.log(opacityValue);

}

// Change color

function changeColor(element) {

    if(rainbowYesNo){
        const hue = (Math.floor(Math.random() * 360));
        element.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    }

    else{
        const btnColor = document.querySelector("#btnChangeColor");
        const btnColorValue = btnColor.value;
        element.style.backgroundColor=(btnColorValue)};
}








    
   
