const mainContainer = document.querySelector('#container');

let gridArray = [];

for(i = 0; i < 256; i++) {
    gridArray.push(document.createElement('div'));
    gridArray[i].classList.add('grid');
    gridArray[i].textContent = '1';
    mainContainer.appendChild(gridArray[i]);
    console.log(gridArray);
};


gridArray.forEach((ele) => ele.addEventListener('mouseover', (evt) => {evt.target.style.backgroundColor = 'black'}));