const container = document.querySelector('#container');
let amount=16;
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

