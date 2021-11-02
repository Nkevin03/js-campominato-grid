const setBtn = document.querySelector('#set-dimension');
const content = document.querySelector('.content')
const dimensionLevel = document.getElementById('dimensions')

setBtn.addEventListener('click', () => {
    content.innerHTML = '';

    const container = document.createElement('div')
    container.classList.add ('container')

    content.append(container)

    const grid_dim = dimensionLevel.value;
    let cellsNumber
    let cellPerSide

    switch (grid_dim) {
        case '3':
            cellsNumber = 100;
            cellPerSide = 10;
            break;
        
        case '2':
            cellsNumber = 81;
            cellPerSide = 9;
            break;

        case '1':
            cellsNumber = 49;
            cellPerSide = 7;
            break;
    }

    for (let i = 1; i <= cellsNumber; i++) {
        const square = createGridSquare(i, cellPerSide);
        container.append(square);

        square.addEventListener('click', function() {
        this.classList.add('active')});
    }

    function createGridSquare(num, cells) {
        const type = (num % 2 === 0) ? 'even' : 'odd';

 
        const node = document.createElement('div');
        node.classList.add('square', `square-${type}`);
        node.style.width = `calc( 100% / ${cells})`;
        node.style.height = `calc(100% / ${cells})`;
        const span = document.createElement('span');
        span.append(num);
        node.append(span);

        return node;
    }
});