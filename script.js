
// SKILLS : to copy the img and repeat it
var skillsLogos = document.querySelector('.skills-logos');
if (skillsLogos) {
  var copy = skillsLogos.cloneNode(true);
  var skillsContainer = document.querySelector('.skills-container');
  if (skillsContainer) {
    skillsContainer.appendChild(copy);
  } else {
    console.error('Element with class "skills-container" not found');
  }
} else {
  console.error('Element with class "skills-logos" not found');
}
//

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
      })
    }

  })
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


//INFOS HTML
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list')
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function(){
  showSlider('next');
}
prevDom.onclick = function(){
  showSlider('prev');
}

let timeRunning = 3000;
//let timeAutoNext = 60000;
let runTimeOut;
let runAutoRun = setTimeout(() => {     
  nextDom.click();
}, timeAutoNext);

function showSlider(type){
  let itemSlider = document.querySelectorAll('.carousel .list .item');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

  if (type === 'next'){
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add('next');
  }
  else{
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add('next');
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {   
    nextDom.click();
  }, timeAutoNext);

}


 

// initialize aos (library for scroll animation)
AOS.init()
