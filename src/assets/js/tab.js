'use strict';

const Tab = function (options) {
  // select tab element
  const el = document.querySelector(options.el);
  const tabLinks = el.querySelectorAll(options.tabLinks);
  const tabPanes = el.querySelectorAll(options.tabPanes);

  console.log(el);
  let activeIndex = 0;
  let initCalled = false;

  // init
  const render = () => {
    if (!initCalled) {
      initCalled = true;
      el.classList.remove('no-js');
      tabLinks.forEach((link, index) => _handleClick(link, index));
    }
  };

  const _handleClick = (link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      goToTab(index);
    });
  };

  // go to current tab pane
  const goToTab = (index) => {
    if (index !== activeIndex && index >= 0 && index <= tabLinks.length) {
      tabLinks[activeIndex].classList.remove('is-active');
      tabLinks[index].classList.add('is-active');

      tabPanes[activeIndex].classList.remove('is-active');
      tabPanes[index].classList.add('is-active');

      activeIndex = index;
    }
  };

  return {
    render: render,
    goToTab: goToTab,
  };
};

// export global namespace
window.Tab = Tab;
// module.exports = Tab;

// const testTab = Tab({
//   el: '.tab-wrapper',
//   navLinks: '.tab__link',
//   navPanes: '.tab__pane',
// }).render;
// testTab.render();
