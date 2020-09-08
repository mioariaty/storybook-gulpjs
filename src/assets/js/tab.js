'use strict';
const Tab = function (options) {
  // select tab element
  this.tabWrapper = document.querySelector(options.tabWrapper);
  this.tabLinks = Array.from(this.tabWrapper.querySelectorAll(options.tabLinks));
  this.tabPanes = Array.from(this.tabWrapper.querySelectorAll(options.tabPanes));

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
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const currentTab = event.target.getAttribute('data-tab');
      this.getActiveNav(index);
      this.getActiveTabPane(currentTab);
    });
  },
  getActiveNav: function (index) {
    if (index !== this.activeIndex && index >= 0 && index <= this.tabLinks.length) {
      this.tabLinks[this.activeIndex].classList.remove('is-active');
      this.tabLinks[index].classList.add('is-active');
      this.activeIndex = index;
    }
  },
  getActiveTabPane: function (tab) {
    return this.tabPanes.map((item) => {
      const tabContent = item.getAttribute('data-tab');
      if (tabContent.includes(tab) === true) {
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
    });
  },
};

// export global namespace
window.Tab = Tab;
