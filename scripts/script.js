const container = document.querySelector('#container');
let amount=16;
for (i=0;i<amount*amount;i++){

 const block =  document.createElement('div');
 block.classList.add('box');
 container.appendChild(block);
}