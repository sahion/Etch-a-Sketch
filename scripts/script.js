

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
    switch (color){
    case 'Black':
        this.style.cssText='background-color:black;';
        this.classList.remove('invisiblack');
        break;

    case 'Colored':
        this.style.cssText='background-color: #'+Math.floor(Math.random()*16777215).toString(16)+';';
        this.classList.remove('invisiblack');
        break;

    case 'Invisiblack':
        if(Array.from(this.classList).indexOf('invisiblack')==-1){
        this.classList.add('invisiblack');
        this.style.opacity=0.1;
        this.style.background="black";
        } else {
            console.log(this.style.opacity);
             this.style.opacity =+this.style.opacity+0.1;
             
        }
        
        break;
    }
}



function clear(e){
    amount = prompt('How Much amount of grid?',16);
    boxes.forEach(box => container.removeChild(box));
    createBoard();
    

}

let boxes ;
const container = document.querySelector('#container');
let amount=20;
let color='Black';






createBoard();


const btnClear = document.querySelector('#clear');
const btnsColor = document.querySelectorAll('.color');

btnClear.addEventListener('click',clear);
btnsColor.forEach(btn => btn.addEventListener('click',function(){
    color=btn.textContent;
}));
boxes.forEach(box => box.addEventListener('mouseover', changeColor));
