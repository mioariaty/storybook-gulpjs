'use strict';

const DataFilter = function (options) {
  // define variables & dom selector
  this.filterNodes = Array.from(document.querySelectorAll(options.filterNodes));
  this.transitionSpeed = options.transitionSpeed;
  this.filterButtons = Array.from(document.querySelectorAll(options.filterButtons));

  // state
  this.activeIndex = 0;
  this.isInit = false;
};

DataFilter.prototype = {
  render: function () {
    if (!this.isInit) {
      this.isInit = true;
      this.filterNodes.forEach((node) => (node.style.transition = this.transitionSpeed));
      this.filterButtons.forEach((filterButton, index) => this.handleClicked(filterButton, index));
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
    if (index !== this.activeIndex && index >= 0 && index <= this.filterButtons.length) {
      this.filterButtons[this.activeIndex].classList.remove('is-active');
      this.filterButtons[index].classList.add('is-active');
      this.activeIndex = index;
    }
  },
  getCurrentGallery: function (curNodeVal) {
    return this.filterNodes.map((item) => {
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
  filterNodes: '.gallery__item',
  filterButtons: '.gallery-nav__link',
  transitionSpeed: 'all 0.5s ease',
}).render();
