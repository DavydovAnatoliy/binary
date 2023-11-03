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

let imageItems = document.querySelectorAll('.image__item');
let ulAllRow = document.querySelector('.all__row');
console.log(ulAllRow);
ulAllRow.addEventListener('click', function (e) {
  let target = e.target;
  let li = target.closest('li');
  if (!li) return;
  let ind = li.dataset.filter;
  if (ind === '1') {
    li.parentElement.classList.toggle('tall');
    for (let li of lis) { 
    li.classList.toggle('long');
    }
    for (let item of imageItems) {
      if (item.style.display === 'none') {
        item.style.display = 'block';
      }
    }
  } else {
    for (let item of imageItems) {
      if (item.dataset.index === ind) {
        item.style.display = 'none';
      } else {
        item.style.display = 'block';
      }
    }
}
  e.preventDefault();
})


let mainblockImage = document.querySelector('.mainblock__image');

window.addEventListener('scroll', function () {
  let i = 0-pageYOffset/3;
  mainblockImage.style.top = i+'px';
})

let elem = document.querySelector('.footer__copy');
function pow() {
  console.log(this);
}
elem.onclick = pow;

