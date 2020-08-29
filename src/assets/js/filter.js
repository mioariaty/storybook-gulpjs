'use strict';

const DataFilter = function (options) {
  // define variables & dom selector
  this.filterWrapper = document.querySelector(options.filterWrapper);
  this.filterNavItems = Array.from(this.filterWrapper.querySelectorAll(options.filterNavItems));
  this.filterListItems = Array.from(this.filterWrapper.querySelectorAll(options.filterListItems));
  this.transitionSpeed = options.transitionSpeed;

  this.activeIndex = 0;
  this.isInit = false;
};
// public methods
DataFilter.prototype = {
  render: function () {
    if (!this.isInit) {
      this.isInit = true;
      this.filterListItems.forEach((node) => (node.style.transition = this.transitionSpeed));
      this.filterNavItems.forEach((navItem, index) => this.handleClicked(navItem, index));
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
    if (index !== this.activeIndex && index >= 0 && index <= this.filterNavItems.length) {
      this.filterNavItems[this.activeIndex].classList.remove('is-active');
      this.filterNavItems[index].classList.add('is-active');
      this.activeIndex = index;
    }
  },
  getCurrentGallery: function (curAttrValue) {
    return this.filterListItems.map((item) => {
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
const example = new DataFilter({
  filterWrapper: '#filter-wrapper1',
  filterNavItems: '.gallery-nav__link',
  filterListItems: '.gallery__item',
  transitionSpeed: 'all 0.5s ease',
}).render();

const example2 = new DataFilter({
  filterWrapper: '#filter-wrapper2',
  filterNavItems: '.gallery-nav__link',
  filterListItems: '.gallery__item',
  transitionSpeed: 'all 0.5s ease',
}).render();
