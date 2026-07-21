const mainContainer = document.querySelector('#container');
const expandGridBtn = document.querySelector('button');

let limitLoop = 256;
let gridArray = [];


expandGridBtn.addEventListener('click', () => creatingNewGrid());

function creatingNewGrid() {
    limitLoop = prompt('Add new number of squares per side', 16);
    if(limitLoop > 80) {limitLoop = prompt('Enter a number not greater than 50');
        gridArray.forEach((ele) => ele.remove());
        limitLoop = limitLoop * limitLoop;
        for(i = 0; i < limitLoop; i++) {
        gridArray.push(document.createElement('div'));
        gridArray[i].classList.add('grid');
        gridArray[i].textContent = '1';
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
        gridArray[i].textContent = '1';
        mainContainer.appendChild(gridArray[i]);
        console.log(gridArray);
}; } gridArray.forEach((ele) => ele.addEventListener('mouseover', (evt) => {evt.target.style.backgroundColor = 'black'}));
    gridArray.forEach((ele) => ele.addEventListener('mouseout', (evt) => {evt.target.style.backgroundColor = 'red'}));
} 

for(i = 0; i < limitLoop; i++) {
    gridArray.push(document.createElement('div'));
    gridArray[i].classList.add('grid');
    gridArray[i].textContent = '1';
    gridArray[i].style.borderColor = 'black';
    mainContainer.appendChild(gridArray[i]);
    console.log(gridArray);
};

gridArray.forEach((ele) => ele.addEventListener('mouseover', (evt) => {evt.target.style.backgroundColor = 'black'}));
gridArray.forEach((ele) => ele.addEventListener('mouseout', (evt) => {evt.target.style.backgroundColor = 'red'}));
