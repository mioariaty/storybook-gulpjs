'use strict';

function DataFilter(options) {
  // define vraibles & dom selector
  const filterGroup = options.filterGroup;
  const filterNodes = options.filterNodes;
  const filterButtons = Array.from(document.querySelectorAll(options.filterButtons));
  const transitionSpeed = options.transitionSpeed;

  const filter_nodes = Array.from(document.querySelectorAll(filterGroup + '>' + filterNodes));

  let activeIndex = 0;
  let isInit = false;

  // add transition
  filter_nodes.forEach((node) => (node.style.transition = 'all' + ' ' + transitionSpeed));

  // render
  const render = () => {
    if (!isInit) {
      isInit = true;
      filterButtons.forEach((filterButton, index) => handleClicked(filterButton, index));
    }
  };

  // handle click current gallery button
  const handleClicked = (link, index) => {
    link.addEventListener('click', (event) => {
      const curNodeVal = event.currentTarget.attributes[1].nodeValue;
      handleToggleActive(index);
      getCurrentGallery(curNodeVal);
    });
  };

  const handleToggleActive = (index) => {
    if (index !== activeIndex && index >= 0 && index <= filterButtons.length) {
      filterButtons[activeIndex].classList.remove('is-active');
      filterButtons[index].classList.add('is-active');
      activeIndex = index;
    }
  };

  // filter by attribute data-filter
  const getCurrentGallery = (curNodeVal) => {
    return filter_nodes.map((currentGallery) => {
      if (curNodeVal === '*') {
        currentGallery.classList.remove('filter-me');
      } else if (currentGallery.getAttribute('data-filter').includes(curNodeVal) === false) {
        currentGallery.classList.add('filter-me');
      } else {
        currentGallery.classList.remove('filter-me');
      }
    });
  };

  return {
    init: render,
    currentGallery: getCurrentGallery,
  };
}
// export global namespace
window.DataFilter = DataFilter;

const example = new DataFilter({
  filterGroup: '.gallery-group',
  filterNodes: '.filter-node',
  filterButtons: '.filter-button',
  transitionSpeed: '0.75s',
}).init();
