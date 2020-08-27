'use strict';

const DataFilter = function (options) {
  // define variables & dom selector
  this.filterWrapper = document.querySelector(options.filterWrapper);
  this.filterListItems = Array.from(this.filterWrapper.querySelectorAll(options.filterListItems));
  this.transitionSpeed = options.transitionSpeed;
  this.filterNavItems = Array.from(this.filterWrapper.querySelectorAll(options.filterNavItems));

  this.activeIndex = 0;
  this.isInit = false;
};

DataFilter.prototype = {
  render: function () {
    if (!this.isInit) {
      this.isInit = true;
      this.filterListItems.forEach((node) => (node.style.transition = this.transitionSpeed));
      this.filterNavItems.forEach((filterButton, index) => this.handleClicked(filterButton, index));
    }
  },
  handleClicked: function (link, index) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const curNodeVal = event.currentTarget.attributes[1].nodeValue;
      console.log(event);
      console.log(curNodeVal);
      this.handleToggleActive(index);
      this.getCurrentGallery(curNodeVal);
    });
  },
  handleToggleActive: function (index) {
    if (index !== this.activeIndex && index >= 0 && index <= this.filterNavItems.length) {
      this.filterNavItems[this.activeIndex].classList.remove('is-active');
      this.filterNavItems[index].classList.add('is-active');
      this.activeIndex = index;
    }
  },
  getCurrentGallery: function (curNodeVal) {
    return this.filterListItems.map((item) => {
      if (curNodeVal === 'all') {
        item.classList.remove('filter-me');
      } else if (item.getAttribute('data-filter').includes(curNodeVal) === false) {
        item.classList.add('filter-me');
      } else {
        item.classList.remove('filter-me');
      }
    });
  },
};

// module.exports = DataFilter;
const example = new DataFilter({
  filterWrapper: '#filter-wrapper1',
  filterListItems: '.gallery__item',
  filterNavItems: '.gallery-nav__link',
  transitionSpeed: 'all 0.5s ease',
}).render();

const example2 = new DataFilter({
  filterWrapper: '#filter-wrapper2',
  filterListItems: '.gallery__item',
  filterNavItems: '.gallery-nav__link',
  transitionSpeed: 'all 0.5s ease',
}).render();
