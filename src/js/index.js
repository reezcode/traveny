var img = document.getElementById('img');

var slides=['src/img/image.png','src/img/image2.png','src/img/image3.png'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,4000);
