const container = document.querySelector('.container');
const grid = document.createElement('div');
grid.classList.add('.add');
grid.classList.remove('.remove');
container.appendChild(grid);

grid.setAttribute('style', 'background: blue; width: 200px; height: 200px')