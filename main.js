let images = ["download (1).jpg","download (2).jpg","download (3).jpg","download (4).jpg","download (5).jpg"];

let button = document.getElementById('button');

var a = 0;

button.addEventListener('click',function(){
   
     a++;
    if(a > images.length-1){
        a=0;
    }
    document.getElementById('img').src = images[a];




})