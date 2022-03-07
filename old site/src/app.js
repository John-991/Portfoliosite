AOS.init();

var i= -1 ,text ,text1;

text = "Aspiring Junior Web Developer"

text1 = "I am Mirian"

function type(){
 if(i < text.length){
   document.getElementById('text2').innerHTML += text.charAt(i);
   document.getElementById('text1').innerHTML += text1.charAt(i);
   i++;
   setTimeout(type,100);
 } 
}

type();

//responsive

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}