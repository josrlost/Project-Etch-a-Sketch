const mainContainer = document.querySelector('#container');
const expandGridBtn = document.querySelector('button');

let limitLoop = 522;
let gridArray = [];

function randomizeColor(num) {
   return Math.floor(Math.random() * num);
}

expandGridBtn.addEventListener('click', () => creatingNewGrid());

function creatingNewGrid() {
    limitLoop = prompt('Add new number of squares per side', 16);
    if(limitLoop > 80) {limitLoop = prompt('Enter a number not greater than 50');
        gridArray.forEach((ele) => ele.remove());
        limitLoop = limitLoop * limitLoop;
        for(i = 0; i < limitLoop; i++) {
        gridArray.push(document.createElement('div'));
        gridArray[i].classList.add('grid');
        gridArray[i].textContent = ' ';
        gridArray[i].style.blockSize = "72px";
        gridArray[i].style.inlineSize = "72px";
        gridArray[i].style.border = '2px solid black';
        mainContainer.appendChild(gridArray[i]);
        console.log(gridArray);  
    } 
}
    else if(limitLoop <= 80) {
        gridArray.forEach((ele) => ele.remove());
        limitLoop = limitLoop * limitLoop;
        for(i = 0; i < limitLoop; i++) {
        gridArray.push(document.createElement('div'));
        gridArray[i].classList.add('grid');
        gridArray[i].textContent = ' ';
        gridArray[i].style.blockSize = "72px";
        gridArray[i].style.inlineSize = "72px";
        gridArray[i].style.border = '2px solid black';
        mainContainer.appendChild(gridArray[i]);
        console.log(gridArray);
}; } gridArray.forEach((ele) => ele.addEventListener('mouseover', (evt) => {evt.target.style.backgroundColor = 'black'}));
    gridArray.forEach((ele) => ele.addEventListener('mouseout', (evt) => {evt.target.style.backgroundColor = 'red'}));
} 

for(i = 0; i < limitLoop; i++) {
    gridArray.push(document.createElement('div'));
    gridArray[i].classList.add('grid');
    gridArray[i].textContent = ' ';
    gridArray[i].style.blockSize = "97px";
    gridArray[i].style.inlineSize = "97px";
    gridArray[i].style.border = '2px solid black';
    mainContainer.appendChild(gridArray[i]);
    console.log(gridArray);
};

gridArray.forEach((ele) => ele.addEventListener('mouseover', (evt) => {evt.target.style.backgroundColor = `rgb(${randomizeColor(255)} ${randomizeColor(255)} ${randomizeColor(255)}`}));
gridArray.forEach((ele) => ele.addEventListener('mouseout', (evt) => {evt.target.style.backgroundColor = `rgb(${randomizeColor(255)} ${randomizeColor(255)} ${randomizeColor(255)}`}));
