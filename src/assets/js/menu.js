(function () {
  function $(selector, context) {
    context = context || document;
    return context['querySelectorAll'](selector);
  }

  function forEach(collection, iterator) {
    for (let key in Object.keys(collection)) {
      iterator(collection[key]);
    }
  }

  function showMenu(menu) {
    var menu = this;
    const ul = $('ul', menu)[0];
    if (!ul || ul.classList.contains('submenu')) return;
    menu.classList.add('active');

    ul.classList.add('-animating');
    ul.classList.add('submenu');
    setTimeout(function () {
      ul.classList.remove('-animating');
    }, 25);
  }

  function hideMenu() {
    let menu = this;
    const ul = $('ul', menu)[0];
    if (!ul || !ul.classList.contains('submenu')) return;

    menu.classList.remove('active');

    ul.classList.add('-animating');
    setTimeout(function () {
      ul.classList.remove('submenu');
      ul.classList.remove('-animating');
    }, 300);
  }

  function hideAllInactiveMenus() {
    forEach($('li.hasSubmenu.active:not(:hover)', this.parent), function (e) {
      e.hideMenu && e.hideMenu();
    });
  }

  window.addEventListener('load', function () {
    forEach($('.menu li.hasSubmenu'), function (e) {
      e.showMenu = showMenu;
      e.hideMenu = hideMenu;
    });

    forEach($('.menu > li.hasSubmenu'), function (e) {
      e.addEventListener('click', showMenu);
    });

    forEach($('.menu > li.hasSubmenu'), function (e) {
      e.addEventListener('mouseover', showMenu);
    });

    forEach($('.menu > li.hasSubmenu li'), function (e) {
      e.addEventListener('mouseover', hideAllInactiveMenus);
    });

    forEach($('.menu > li.hasSubmenu li.hasSubmenu'), function (e) {
      e.addEventListener('mouseover', showMenu);
    });
    

    document.addEventListener('click', hideAllInactiveMenus);

    console.log(window);
  });
})();
