let ibgs = document.querySelectorAll('.ibg');
for (let ibg of ibgs) {
    let img = ibg.querySelector('img');
    if (img) {
    let url = img.getAttribute('src');
    ibg.style.backgroundImage = 'url(' + url + ')';
    }
    
}

let arrow = document.querySelector('.mainblock__arrow');
arrow.addEventListener('click', function () {
   window.scrollTo({
  top: window.innerHeight,
  left: 0,
  behavior: "smooth"
});
})

let burger = document.querySelector('.menu__burger');
let ul = document.querySelector('.menuList');
burger.addEventListener('click', function () {
  ul.classList.toggle('actiwe');
  this.classList.toggle('actiwe');
  document.body.classList.toggle('lock');
})

let liac = document.querySelector('.ac');

let lis = document.querySelectorAll('.li-portfolio');
liac.addEventListener('click', function () {
  this.parentElement.classList.toggle('tall');
  for (let li of lis) {
    console.log(li);
    li.classList.toggle('long');
  }
  
})
