

function createBoard(){
for (i=0;i<amount;i++){
gridTemplateColumns+='auto ';
}
container.style.cssText=`grid-template-columns:${gridTemplateColumns}; `;

for (i=0;i<amount*amount;i++){
 const block =  document.createElement('div');
 
 block.classList.add('box');
 
 container.appendChild(block);
}
}

function changeColor(e){
    this.style.cssText='background-color:black;';
}



function clear(e){
    boxes.forEach(box => box.style.background="aqua");
}


const container = document.querySelector('#container');
let amount=16;
let gridTemplateColumns='';





createBoard();
const boxes = document.querySelectorAll('.box');
const btnClear = document.querySelector('#clear');

btnClear.addEventListener('click',clear);
boxes.forEach(box => box.addEventListener('mouseover', changeColor));
