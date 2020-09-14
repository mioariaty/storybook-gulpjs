document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  /*
    toggle menu bar
  ***********************************/

  const btnToggle = document.querySelector('.navbar__toggler');
  const navCollapes = document.querySelector('.navbar-collapse');
  const btnClose = document.querySelector('.btn--close');

  if (navCollapes) {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        navCollapes.classList.add('hidden');
      } else {
        navCollapes.classList.remove('hidden');
      }
    };

    const handleToggleClicked = (e) => {
      e.preventDefault();
      if (navCollapes.classList.contains('hidden')) {
        navCollapes.classList.remove('hidden');
      } else {
        navCollapes.classList.add('hidden');
      }
    };

    handleResize();
    btnToggle.addEventListener('click', handleToggleClicked);
    btnClose.addEventListener('click', handleToggleClicked);
    window.addEventListener('resize', handleResize);
  }

  /*
    carousel
  ***********************************/
  const swiperContainer = document.querySelector('.swiper-container');

  if (swiperContainer) {
    const demoVertical = new Swiper('.demo1', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    const postSlider = new Swiper('.demo3', {
      slidesPerView: 1,
      slidesPerColumn: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    const demoFraction = new Swiper('.demo2', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  /*
    click dropdown
  ***********************************/
  // const dropdown = document.querySelector('.dropdown');
  // const dropdownBtn = document.querySelector('.btn--dropdown');
  // const dropdownContent = document.querySelector('.dropdown__content');

  // if (dropdown) {
  //   const toggleDropdown = () => {
  //     if (dropdownContent.classList.contains('is-active')) {
  //       dropdownContent.classList.remove('is-active');
  //     } else {
  //       dropdownContent.classList.add('is-active');
  //     }
  //   };
  //   dropdownBtn.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     toggleDropdown();
  //   });
  //   window.addEventListener('click', function () {
  //     if (!event.target.matches('.btn--dropdown')) {
  //       toggleDropdown();
  //     }
  //   });
  // }

  const scrollToTop = document.querySelector('#scrollTop');
  if (scrollToTop) {
    scrollToTop.addEventListener('click', function () {
      window.scrollTo(0, 0);
    });
  }

  function hasClass(element, className) {
    return ('' + element.className + '').indexOf('' + className + '') > -1;
  }

  // label form effect
  const form = document.querySelector('#tab-form form');
  if (form) {
    window.addEventListener('load', function () {
      const inputsEle = Array.from(document.querySelectorAll(
        '.input-border--bottom'));

      function onBlur() {
        if (this.value) {
          this.classList.add('active');
        } else {
          this.classList.remove('active');
        }
      }
      inputsEle.forEach(input => input.addEventListener('blur',
        onBlur));
    });
  }

  // home 2
  const btnOpening = document.querySelector(".home2-opening .icon");
  const home2Opening = document.querySelector('.home2-opening');
  const home2Sly = document.querySelector('.home-sly');

  if (home2Opening) {
    btnOpening.addEventListener('click', function (e) {
      e.preventDefault();
      if (home2Opening.classList.contains('hide') && !home2Sly.classList
        .contains('hide')) {
        home2Opening.classList.remove('hide');
        home2Sly.classList.add('hide');
      } else {
        home2Opening.classList.add('hide');
        home2Sly.classList.remove('hide');
      }
    })
  }
});
