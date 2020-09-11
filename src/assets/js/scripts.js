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

  // label form effect
  const form = document.querySelector('#tab-form form');
  if (form) {
    const inputsEle = Array.from(form.querySelectorAll('.input-control'));
    const labelsEle = Array.from(form.querySelectorAll('label'));

    const onFocus = () => inputsEle.forEach((input) => input.focus());

    const handleOnChange = (e) => {
      const { value } = e.target;
      labelsEle.forEach((label) => {
        if (label.classList.contains('active')) {
          return;
        }
        else if (value.length > 0) {
          label.classList.add('active');
          onFocus();
        } else {
          label.classList.add('active');
        }
      });

    }

    const handleClick = () => {
      labelsEle.forEach((label) => {
        if (label.classList.contains('active')) {
          return;
        } else {
          label.classList.add('active');
          onFocus();
        }
      });
    };

    inputsEle.forEach(input => input.addEventListener("change", handleOnChange.bind(this)));
    inputsEle.forEach((input) => input.addEventListener('click', handleClick));


    labelsEle.forEach((label) => label.addEventListener('click', handleClick));

    window.addEventListener('click', function (e) {
      if (
        !event.target.matches('.input-border--bottom') &&
        !event.target.matches('.form__item label')
      ) {
        labelsEle.forEach((label) => {
          if (label.classList.contains('active')) {
            label.classList.remove('active')
          };
        });
      }
    });
  }
});
