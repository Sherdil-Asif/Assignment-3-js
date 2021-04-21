let images = ["download (1).jpg","download (2).jpg","download (3).jpg","download (4).jpg","download (5).jpg"];

let button = document.getElementById('button');



button.addEventListener('click',function(){
   
     let randomimage = images[Math.floor(Math.random() * images.length)]

var container = document.getElementById('container');

document.getElementById('img');
container.style.background= randomimage;


})