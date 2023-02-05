// const table = document.querySelector(".table");

const cells = document.querySelectorAll("td");
const startButton = document.querySelector(".start")
const stopButton = document.querySelector(".stop")

let cellsColors = [];

cells.forEach( (el, index) => {
    cellsColors[index] = "black";
    el.style.backgroundColor = "black";
    el.style.color = "black";
el.addEventListener('click', () => {
if(el.style.backgroundColor == "black") {
    el.style.backgroundColor = "white";
    cellsColors[index] = 1;
el.style.color = "white";
} else {
    el.style.backgroundColor = "black";
    cellsColors[index] = 0;
    el.style.color = "black";
}
});
});

let newColors = [];

let interv;
startButton.addEventListener("click", () => {
    interv = setInterval ( () => {
        cells.forEach ( (el, index) => {
            let a = 0;
         if(cellsColors[index+1] == 1) {
            ++a;
         }
        
         if(cellsColors[index-1] == 1) {
            ++a;
         }
        
         if(cellsColors[index+25] == 1) {
            ++a;
         }
         if(cellsColors[index+26] == 1) {
            ++a;
         }
         if(cellsColors[index+24] == 1) {
            ++a;
         }
         
         if(cellsColors[index-25] == 1) {
            ++a;
         }
         if(cellsColors[index-26] == 1) {
            ++a;
         }
         if(cellsColors[index-24] == 1) {
            ++a;
        }
        
        if (a >= 3) {
            newColors[index] = 1;
        } else {
            newColors[index] = 0;
        }
          
        if(newColors[index] == 1) {
            el.style.backgroundColor = "white";
        } else {
            el.style.backgroundColor = "black";
        }

        
        
        });
        
        cellsColors = newColors;
        newColors = [];
        console.log(cellsColors);
        console.log(newColors);
    }, 500);
});

stopButton.addEventListener("click", () => {
    clearInterval(interv);
    cells.forEach( (el, index) => {
        cellsColors[index] = "black";
        el.style.backgroundColor = "black";
        el.style.color = "black";});
});

