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


const form = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const destination = document.getElementById('destination');

form.addEventListener('submit', function(event) {
  if (!validateName(name.value)) {
    event.preventDefault();
    alert('Nama tidak valid');
  }

  if (!validateEmail(email.value)) {
    event.preventDefault();
    alert('Email tidak valid');
  }

  if (destination.value === '') {
    event.preventDefault();
    alert('Harap pilih destinasi wisata');
  }
});

function validateName(name) {
  const regex = /^[a-zA-Z ]+$/;
  return regex.test(name);
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
