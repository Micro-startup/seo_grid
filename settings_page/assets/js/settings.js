
/* $(function(){
  $('.selectpicker').selectpicker();
}); */

// Password toggler
let x = document.getElementsByClassName("pwordeye")[0]; // hide password (eye slash)
let y = document.getElementsByClassName("pwordeye")[1]; // show password (eye)
let p = document.getElementsByClassName("input-group-text");
let passInput = document.querySelector('.js-password_input');
x.setAttribute('style', "display:none;")
// Toggle password visibility
x.addEventListener('click', myFunction);
y.addEventListener('click', myFunction);
function myFunction() {

    if (passInput.type === "password") {
      passInput.type = "text";
        x.setAttribute('style', "display:none;")
       y.setAttribute('style', "display:block;")
    } else {
      passInput.type = "password";
        x.setAttribute('style', "display:block;")
        y.setAttribute('style', "display:none;")
    }
}


// Password toggler new password input 
let x1 = document.getElementsByClassName("pwordeye1")[0]; // hide password (eye slash)
let y1 = document.getElementsByClassName("pwordeye1")[1]; // show password (eye)
let p1 = document.getElementsByClassName("eye");
let passInput1 = document.querySelector('.js-password_input1');
x1.setAttribute('style', "display:none;")
// Toggle password visibility
x1.addEventListener('click', myFunction1);
y1.addEventListener('click', myFunction1);
function myFunction1() {

    if (passInput1.type === "password") {
      passInput1.type = "text";
        x1.setAttribute('style', "display:none;")
       y1.setAttribute('style', "display:block;")
    } else {
      passInput1.type = "password";
        x1.setAttribute('style', "display:block;")
        y1.setAttribute('style', "display:none;")
    }
}

// Password toggler confirm password input 
let x2 = document.getElementsByClassName("pwordeye2")[0]; // hide password (eye slash)
let y2 = document.getElementsByClassName("pwordeye2")[1]; // show password (eye)
let p2 = document.getElementsByClassName("eye1");
let passInput2 = document.querySelector('.js-password_input2');
x2.setAttribute('style', "display:none;")
// Toggle password visibility
x2.addEventListener('click', myFunction2);
y2.addEventListener('click', myFunction2);
function myFunction2() {

    if (passInput2.type === "password") {
      passInput2.type = "text";
        x2.setAttribute('style', "display:none;")
       y2.setAttribute('style', "display:block;")
    } else {
      passInput2.type = "password";
        x2.setAttribute('style', "display:block;")
        y2.setAttribute('style', "display:none;")
    }
}