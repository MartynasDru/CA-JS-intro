// Užduotis #1
const variantas1 = `I couldn't do my homework because
I had a "lot to do" at my work!`;

const variantas2 = 'I couldn\'t do my homework because\nI had a "lot to do" at my work';

console.log(variantas1);
console.log(variantas2);

// Užduotis #2
const btn = document.getElementById('test');

// btn.style.backgroundColor = 'red';
// btn.style.color = 'white';
// btn.innerText = 'My inserted text';

// Užduotis #3
btn.addEventListener('click', () => {
    const btn = document.getElementById('test');
    btn.style.backgroundColor = 'red';
    btn.style.color = 'white';
    btn.innerText = 'My inserted text';
});

// Užduotis #2
const addSquareBoxBtn = document.getElementById('add-square-box-btn');
const boxesContainer = document.getElementById('container');

boxesContainer.style = `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
`;

addSquareBoxBtn.addEventListener('click', () => {
    const box = document.createElement('div');
    box.style = `
        background-color: red;
        height: 30px;
        width: 30px;
    `;

    boxesContainer.appendChild(box);
});