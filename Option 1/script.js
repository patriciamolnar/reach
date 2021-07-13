window.addEventListener('DOMContentLoaded', setup); 

function setup() {
  //Show last paragraph
  const showPara = (e) => {
    const btn = e.target; 
    const parent = btn.parentElement; 
    if(parent.classList.contains('appear')) {
      parent.classList.remove('appear'); 
      btn.textContent = 'Show more'; 
      btn.setAttribute('aria-expanded', 'false');
    } else {
      parent.classList.add('appear'); 
      btn.textContent = 'Show less'; 
      btn.setAttribute('aria-expanded', 'true');
    }
  }
  
  const showBtn = document.querySelectorAll('.service__copy > button'); 
  showBtn.forEach(btn => {
    btn.addEventListener('click', (e) => showPara(e), false);
  }); 

  //Intersection Observer to lazy load images
  const imgs = document.querySelectorAll('.service__img img');

  const options = {
    threshold: 0, 
    rootMargin: '0px'
  }; 

  const observer = new IntersectionObserver(
    function(entries, observer) {
      entries.forEach(entry => {
        if(!entry.isIntersecting) { return; }
        else { 
            const src = entry.target.getAttribute('data-src');
            entry.target.src = src; 
            observer.unobserve(entry.target);
        }
      });
    }, options
  );

  imgs.forEach(img => observer.observe(img)); 

  // Mobile Navigation 
  const nav = document.getElementById('nav');
  const header = document.querySelector('header');

  function openCloseNav(e) {
    e.target.classList.toggle("change"); 
    nav.classList.toggle('show');
    nav.classList.toggle('notransition');   
    header.classList.toggle('show');

    const lis = document.querySelectorAll('#nav li'); 

    let num = lis.length; 
    let delay = 0.3;  
    while(num > 0) {
      lis[lis.length - num].style.animationDelay = delay + 's'; 
      num--; 
      delay += 0.3; 
    } 
  }

  const burger = document.querySelector('.burger'); 
  burger.addEventListener('click', function(e) {
    openCloseNav(e);
  }); 

  //close navigation when nav link clicked
  function removeStyle() {
    nav.classList.remove('show');
    header.classList.remove('show');
    nav.classList.toggle('notransition');
    document.querySelector('.burger').classList.remove('change');
  }

  const navLinks = document.querySelectorAll('.nav-links');
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', removeStyle);
  });

  //close nav if user tabs away from last link
  const lastLi = document.querySelector('#nav li:last-child'); 

  lastLi.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      burger.classList.remove('change');
      nav.classList.remove('show');
    }
  }, false);

}