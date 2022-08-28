let display = document.getElementById('screen');

let buttons = Array.from(document.getElementsByClassName('button'));

 buttons.map(button =>{
  
 button.addEventListener('click', (e)=>{
   switch(e.target.innerText){
   case'D':display.innerText =display.innerText.slice(0,-1);
   break;
   case'√': display.innerText =display.innerText;
   break;
   case'=': try{display.innerText=eval(display.innerText);}
   catch{display.innerText="Math Error!";}
   break;       
   case'C': display.innerText = " ";
   break;
   default:display.innerText +=e.target.innerText;                 

}
 });
 
});










/* makes it lookable and numbers shows on screen
switch=if it functions like if statement

buttons.map(button =>{
  
 button.addEventListener('click', (e)=>{
   switch(e.target.innerText){default:display.innerText +=e.target.innerText;                 

}
 });
 
});

building blocks to some case


case'=': display.innerText =eval(display.innerText);  


case'D':display.innerText =display.innerText.slice(0,-1);
   break;  
*/
