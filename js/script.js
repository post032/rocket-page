"use strict";
  var open = document.querySelector('.menu__open');
  var menu = document.querySelector('.menu');
  var logo = document.querySelector('.menu__logo');
  var show = document.querySelector('.menu__nav');
  var toggle = document.querySelector('.menu__range');
  var day = document.querySelector('.menu__day');
  var night = document.querySelector('.menu__night');
  var about = document.querySelector('.about-us');
  var adv = document.querySelector('.advantages');
  var body = document.querySelector('body');

  open.addEventListener('click', function (e) {
    e.preventDefault();
    if(show.classList.contains('menu__nav--close')) {
      show.classList.remove('menu__nav--close');
      open.classList.remove('menu__open');
      open.classList.add('menu__close');
      logo.classList.add('menu__logo--active');
      menu.classList.add('menu--active');
    }
    else {
      show.classList.add('menu__nav--close');
      open.classList.add('menu__open');
      open.classList.remove('menu__close');
      logo.classList.remove('menu__logo--active');
      menu.classList.remove('menu--active');
    }
  });

day.addEventListener('click', function (e) {
  e.preventDefault();
  if(day.classList.contains('menu__active')) {
  }
  else {
    day.classList.add('menu__active');
    night.classList.remove('menu__active');
    about.classList.remove('night');
    menu.classList.remove('night');
    adv.classList.remove('night');
    body.classList.remove('night');
  }
});

night.addEventListener('click', function (e) {
  e.preventDefault();
  if(night.classList.contains('menu__active')) {
  }
  else {
    day.classList.remove('menu__active');
    night.classList.add('menu__active');
    about.classList.add('night');
    menu.classList.add('night');
    adv.classList.add('night');
    body.classList.add('night');
  }
});
