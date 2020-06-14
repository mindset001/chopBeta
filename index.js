let openNav = document.querySelector('.nav-slider');
let closeNav = document.querySelector('.close-nav-slider');
let navSliderSection = document.querySelector('.nav-slider-section');
let navLinks = document.querySelectorAll('.nav-links');

openNav.onclick = function() {
    navSliderSection.classList.remove('closeNav');
    navSliderSection.classList.add('openNav');
}

// closeNav.onclick = function() {
//     navSliderSection.classList.remove('openNav');
//     navSliderSection.classList.add('closeNav');

// } 
closeNav.onclick = closeNavSlider; 

navLinks.forEach((link) => {
    link.onclick = closeNavSlider;
});

function closeNavSlider() {
    navSliderSection.classList.remove('openNav');
    navSliderSection.classList.add('closeNav');
}


var percent =document.getElementById("progressbar");
var percent =document.getElementById("percent");
var totalHeight = document.body.scrollHeight = window.innerHeight;
window.onscroll = function(){
   var progress = (window.pageYOffset / totalHeight) * 100;
   progressbar.style.height = progress + "%";
//    percent.innerHTML = "Page Scrolled " + Math.round(progress)+ "%";
} 


