const CONTAINER_SIZE = 400;

const grid = document.querySelector('.grid');


function createGrid(size)
{
    let cellSize = CONTAINER_SIZE / size;
    for(let i = 0; i < size; ++i)
    {
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < size; ++j)
        {
            let div = document.createElement('div');
            div.textContent = "";
            div.classList.add('col');
            row.classList.add('row');
            div.style.width = CONTAINER_SIZE/size + 'px';
            div.style.height = CONTAINER_SIZE/size + 'px';
            div.style.backgroundColor = 'green';
            row.appendChild(div);
            div.addEventListener('mouseover', () =>
            {
                
                div.style.backgroundColor = 'black';
            })
        }
        grid.appendChild(row);
    }
}
let changeSize = document.querySelector('#changeSize');

function removeGrid()
{
    let rows = document.querySelectorAll('.row')
    rows.forEach(row => {
        grid.removeChild(row);
    })
}

changeSize.addEventListener('click', () => {    
    let userInput = prompt('Please enter the size of grid you want: ');
    if (+userInput > 0 && +userInput < 100 && +userInput != NaN)
    {
        removeGrid();
        createGrid(+userInput);
    }
})

createGrid(16);
