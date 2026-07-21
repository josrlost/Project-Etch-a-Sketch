const mainContainer = document.querySelector('#container');
const expandGridBtn = document.querySelector('button');

let limitLoop = 256;
let gridArray = [];


expandGridBtn.addEventListener('click', () => creatingNewGrid());

function creatingNewGrid() {
    limitLoop = prompt('Add new number of squares per side for the grid', 256);
    gridArray.forEach((ele) => ele.remove());
    limitLoop = limitLoop * limitLoop;
    for(i = 0; i < limitLoop; i++) {
    gridArray.push(document.createElement('div'));
    gridArray[i].classList.add('grid');
    gridArray[i].textContent = '1';
    mainContainer.appendChild(gridArray[i]);
    console.log(gridArray);
};
} 

for(i = 0; i < limitLoop; i++) {
    gridArray.push(document.createElement('div'));
    gridArray[i].classList.add('grid');
    gridArray[i].textContent = '1';
    mainContainer.appendChild(gridArray[i]);
    console.log(gridArray);
};

gridArray.forEach((ele) => ele.addEventListener('mouseover', (evt) => {evt.target.style.backgroundColor = 'black'}));
