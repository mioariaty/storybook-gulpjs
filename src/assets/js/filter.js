'use strict';
const DataFilter = function (options) {
  // define variables & dom selector
  this.wrapper = document.querySelector(options.wrapper);
  this.navItems = Array.from(this.wrapper.querySelectorAll(options.navItems));
  this.listItems = Array.from(this.wrapper.querySelectorAll(options.listItems));
  this.transitionSpeed = options.transitionSpeed;

  this.activeIndex = 0;
  this.isInit = false;
};
// public methods
DataFilter.prototype = {
  render: function () {
    if (!this.isInit) {
      this.isInit = true;
      this.listItems.forEach((item) => (item.style.transition = this.transitionSpeed));
      this.navItems.forEach((navItem, index) => this.handleClicked(navItem, index));
    }
  },
  handleClicked: function (navItem, index) {
    navItem.addEventListener('click', (event) => {
      event.preventDefault();
      const curAttrValue = event.target.getAttribute('data-filter');
      this.handleToggleActive(index);
      this.getCurrentGallery(curAttrValue);
    });
  },
  handleToggleActive: function (index) {
    if (index !== this.activeIndex && index >= 0 && index <= this.navItems.length) {
      this.navItems[this.activeIndex].classList.remove('is-active');
      this.navItems[index].classList.add('is-active');
      this.activeIndex = index;
    }
  },
  getCurrentGallery: function (curAttrValue) {
    return this.listItems.map((item) => {
      if (curAttrValue === 'all') {
        item.classList.remove('filter-hidden');
      } else if (item.getAttribute('data-filter').includes(curAttrValue) === false) {
        item.classList.add('filter-hidden');
      } else {
        item.classList.remove('filter-hidden');
      }
    });
  },
};
// window.DataFilter = DataFilter;

// module.exports = DataFilter;


