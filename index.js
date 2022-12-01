
const p = document.querySelector("p");
const bar = document.querySelector(".front-bar")
const h1 = document.querySelector("h1");

let n = 0;
Number();
function Number() {
    p.innerText = n + "%";
    bar.style.width = n + "%";
    
    if( n< 100) {
       n++;
       setTimeout(Number)
    }
}








    

   
       

