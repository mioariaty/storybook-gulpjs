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

    const demoHorizontal = new Swiper('.demo3', {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 120,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 120,
        },
      },
    });
  }

  /*
    hover focus input
  ***********************************/
  const searchBtn = document.querySelector('.btn--search');
  const searchInput = document.querySelector('#searchInput');

  if (searchInput) {
    const handleHover = () => {
      if (window.innerWidth > 1023) {
        if (searchInput.classList.contains('hidden')) {
          searchInput.classList.remove('hidden');
        } else {
          searchInput.classList.add('hidden');
        }
        searchInput.focus();
      }
    };

    searchBtn.addEventListener('mouseenter', handleHover);
    searchInput.addEventListener('mouseover', () => searchInput.focus());
  }

  /*
    click dropdown
  ***********************************/
  const dropdown = document.querySelector('.dropdown');
  const dropdownBtn = document.querySelector('.btn--dropdown');
  const dropdownContent = document.querySelector('.dropdown__content');

  if (dropdown) {
    const toggleDropdown = () => {
      if (dropdownContent.classList.contains('is-active')) {
        dropdownContent.classList.remove('is-active');
      } else {
        dropdownContent.classList.add('is-active');
      }
    };
    dropdownBtn.addEventListener('click', function (e) {
      e.preventDefault();
      toggleDropdown();
    });
    window.addEventListener('click', function () {
      if (!event.target.matches('.btn--dropdown')) {
        toggleDropdown();
      }
    });
  }
});
