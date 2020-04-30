

function createBoard(){
    let gridTemplateColumns='';
for (i=0;i<amount;i++){
gridTemplateColumns+='auto ';
}
container.style.cssText=`grid-template-columns:${gridTemplateColumns}; `;

for (i=0;i<amount*amount;i++){
 const block =  document.createElement('div');
 
 block.classList.add('box');
 
 container.appendChild(block);
}
 boxes = document.querySelectorAll('.box');
 boxes.forEach(box => box.addEventListener('mouseover', changeColor));
}

function changeColor(e){
    this.style.cssText='background-color:black;';
}



function clear(e){
    amount = prompt('How Much amount of grid?',16);
    boxes.forEach(box => container.removeChild(box));
    createBoard();
    

}

let boxes ;
const container = document.querySelector('#container');
let amount=20;






createBoard();


const btnClear = document.querySelector('#clear');

btnClear.addEventListener('click',clear);
boxes.forEach(box => box.addEventListener('mouseover', changeColor));
