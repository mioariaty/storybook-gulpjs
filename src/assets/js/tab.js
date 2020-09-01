'use strict';
const Tab = function (options) {
  // select tab element
  this.tabWrapper = document.querySelector(options.tabWrapper);
  this.tabLinks = this.tabWrapper.querySelectorAll(options.tabLinks);
  this.tabPanes = this.tabWrapper.querySelectorAll(options.tabPanes);

  this.activeIndex = 0;
  this.isTabRender = false;
};

Tab.prototype = {
  render: function () {
    if (!this.isTabRender) {
      this.isTabRender = true;
      this.tabLinks.forEach((link, index) => this.handleClick(link, index));
    }
  },
  handleClick: function (link, index) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      this.goToTab(index);
    });
  },
  goToTab: function (index) {
    if (index !== this.activeIndex && index >= 0 && index <= this.tabLinks.length) {
      this.tabLinks[this.activeIndex].classList.remove('is-active');
      this.tabLinks[index].classList.add('is-active');

      this.tabPanes[this.activeIndex].classList.remove('is-active');
      this.tabPanes[index].classList.add('is-active');

      this.activeIndex = index;
    }
  },
};

// export global namespace
window.Tab = Tab;
