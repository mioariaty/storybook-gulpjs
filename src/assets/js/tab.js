'use strict';
const Tab = function (options) {
  // select tab element
  const el = document.querySelector(options.el);
  const tabLinks = el.querySelectorAll(options.tabLinks);
  const tabPanes = el.querySelectorAll(options.tabPanes);

  let activeIndex = 0;
  let isTabRender = false;

  // init
  const render = () => {
    if (!isTabRender) {
      isTabRender = true;
      el.classList.remove('no-js');
      tabLinks.forEach((link, index) => _handleClick(link, index));
    }
  };

  // handle tab link click
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

// const testTab = Tab({
//   el: '.tab-wrapper',
//   tabLinks: '.tab__link',
//   tabPanes: '.tab__pane',
// }).render;
// testTab.render();
