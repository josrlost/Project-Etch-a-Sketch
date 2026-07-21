const mainContainer = document.querySelector('#container');

let gridArray = [];

for(i = 0; i <= 256; i++) {
    gridArray.push(document.createElement('div'));
    mainContainer.appendChild(gridArray[i]);
    console.log(gridArray);
};


