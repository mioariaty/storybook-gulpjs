const Modal = function () {
  // Create global element references
  this.closeButton = null;
  this.modal = null;
  this.overlay = null;

  // prefix
  this.transitionEnd = transitionSelect();

  // Define option defaults
  const defaults = {
    autoOpen: false,
    className: 'fade-and-drop',
    closeButton: true,
    maxWidth: 760,
    minWidth: 280,
    overlay: true,
  };

  // Create options by extending defaults with the passed in arugments
  // arguments[0] = model wrapper
  if (arguments[0] && typeof arguments[0] === 'object') {
    this.options = extendDefaults(defaults, arguments[0]);
  }
  if (this.options.autoOpen === true) this.open();
};

// Public Methods
Modal.prototype = {
  close: function () {
    this.modal.className = this.modal.className.replace(' scotch-open', '');
    this.overlay.className = this.overlay.className.replace(' scotch-open', '');
    this.modal.addEventListener(this.transitionEnd, () =>
      this.modal.parentNode.removeChild(this.modal),
    );
    this.overlay.addEventListener(this.transitionEnd, () => {
      if (this.overlay.parentNode) this.overlay.parentNode.removeChild(this.overlay);
    });
  },
  open: function () {
    buildOut.call(this);
    initializeEvents.call(this);
    window.getComputedStyle(this.modal).height;

    this.modal.className =
      this.modal.className +
      (this.modal.offsetHeight > window.innerHeight
        ? ' scotch-open scotch-anchored'
        : ' scotch-open');
    this.overlay.className = `${this.overlay.className} scotch-open`;
  },
};

// Private Methods
function buildOut() {
  let modalWrapper, contentHolder, docFrag;

  /*
   * If modalWrapper is an HTML string, append the HTML string.
   * If modalWrapper is a domNode, append its content.
   */

  if (typeof this.options.modalWrapper === 'string') {
    modalWrapper = this.options.modalWrapper;
  } else {
    modalWrapper = this.options.modalWrapper.innerHTML;
  }

  // Create a DocumentFragment to build with
  docFrag = document.createDocumentFragment();

  // Create modal element
  this.modal = document.createElement('div');
  this.modal.className = 'scotch-modal ' + this.options.className;
  this.modal.style.minWidth = this.options.minWidth + 'px';
  this.modal.style.maxWidth = this.options.maxWidth + 'px';

  // If closeButton option is true, add a close button
  if (this.options.closeButton === true) {
    this.closeButton = document.createElement('button');
    this.closeButton.className = 'scotch-close close-button';
    this.closeButton.innerHTML = '&times;';
    this.modal.appendChild(this.closeButton);
  }

  // If overlay is true, add one
  if (this.options.overlay === true) {
    this.overlay = document.createElement('div');
    this.overlay.className = `scotch-overlay ${this.options.className}`;
    docFrag.appendChild(this.overlay);
  }

  // Create content area and append to modal
  contentHolder = document.createElement('div');
  contentHolder.className = 'scotch-content';
  contentHolder.innerHTML = modalWrapper;
  this.modal.appendChild(contentHolder);

  // Append modal to DocumentFragment
  docFrag.appendChild(this.modal);

  // Append DocumentFragment to body
  document.body.appendChild(docFrag);
}

function extendDefaults(options, properties) {
  for (let property in properties) {
    if (properties.hasOwnProperty(property)) {
      options[property] = properties[property];
    }
  }
  return options;
}

function initializeEvents() {
  if (this.closeButton) {
    this.closeButton.addEventListener('click', this.close.bind(this));
  }
  if (this.overlay) {
    this.overlay.addEventListener('click', this.close.bind(this));
  }
}

function transitionSelect() {
  const el = document.createElement('div');
  if (el.style.WebkitTransition) return 'webkitTransitionEnd';
  if (el.style.OTransition) return 'oTransitionEnd';
  return 'transitionend';
}

// test
const modal1 = new Modal({
  modalWrapper: document.getElementById('test-modal'),
  maxWidth: 700,
  minWidth: 300,
  closeButton: true,
});
const btnModal1 = document.getElementById('trigger');
btnModal1.addEventListener('click', () => modal1.open());

const modal2 = new Modal({
  modalWrapper: document.querySelector('#test-modal2'),
});
const btnModal2 = document.querySelector('#btnModal2');
btnModal2.addEventListener('click', () => modal2.open());
