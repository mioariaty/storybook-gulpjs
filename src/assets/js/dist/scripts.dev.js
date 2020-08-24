"use strict";

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var btnToggle = document.querySelector('.navbar__toggler');
  var navCollapes = document.querySelector('.navbar-collapse');
  var btnClose = document.querySelector('.btn--close');

  if (navCollapes) {
    var handleResize = function handleResize() {
      if (window.innerWidth < 1024) {
        navCollapes.classList.add('hidden');
      } else {
        navCollapes.classList.remove('hidden');
      }
    };

    var handleClicked = function handleClicked(e) {
      e.preventDefault();

      if (navCollapes.classList.contains('hidden')) {
        navCollapes.classList.remove('hidden');
      } else {
        navCollapes.classList.add('hidden');
      }
    };

    handleResize();
    btnToggle.addEventListener('click', handleClicked);
    btnClose.addEventListener('click', handleClicked);
    window.addEventListener('resize', handleResize);
  } // carousel
  // if (document.querySelector('.swiper.container')) {


  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  }); // }
});