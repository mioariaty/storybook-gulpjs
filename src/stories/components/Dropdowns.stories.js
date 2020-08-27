import '../helpers/menu';

export default {
  title: 'Components/Dropdowns',
};

export const OnHover = () => {
  return /* html */ `
    <h2>Refresh the page to get scripts</h2>
    <hr/>
    <div class="grid-fluid">
      <div class="col-desk-6">
        <h2>Horizontal</h2>
        <ul class="menu -horizontal">
          <li class="hasSubmenu"> <a href="#" class="menu__item">Dropdrown</a>
            <ul>
              <li><a href="#" class="menu__item">Bacon</a></li>
              <li class="hasSubmenu"> <a href="#" class="menu__item">Sub-menu</a>
                <ul>
                  <li><a href="#" class="menu__item">Bacon</a></li>
                  <li><a href="#" class="menu__item">Ipsum</a></li>
                  <li><a href="#" class="menu__item">Dolor</a></li>
                  <li><a href="#" class="menu__item">Amet</a></li>
                </ul>
              </li>
              <li><a href="#" class="menu__item">Dolor</a></li>
              <li class="hasSubmenu"> <a href="#" class="menu__item">Another Sub-menu</a>
                <ul>
                  <li><a href="#" class="menu__item">Bacon</a></li>
                  <li><a href="#" class="menu__item">Ipsum</a></li>
                  <li class="hasSubmenu"> <a href="#" class="menu__item">Sub-sub-menu!</a>
                    <ul>
                      <li><a href="#" class="menu__item">Bacon</a></li>
                      <li><a href="#" class="menu__item">Ipsum</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="col-desk-6">
       <h2>Vertical</h2>
        <ul class="menu -vertical">
          <li class="hasSubmenu"> <a href="#" class="menu__item">Dropdrown</a>
            <ul>
              <li><a href="#" class="menu__item">Bacon</a></li>
              <li class="hasSubmenu"> <a href="#" class="menu__item">Sub-menu</a>
                <ul>
                  <li><a href="#" class="menu__item">Bacon</a></li>
                  <li><a href="#" class="menu__item">Ipsum</a></li>
                  <li><a href="#" class="menu__item">Dolor</a></li>
                  <li><a href="#" class="menu__item">Amet</a></li>
                </ul>
              </li>
              <li><a href="#" class="menu__item">Dolor</a></li>
              <li class="hasSubmenu"> <a href="#" class="menu__item">Another Sub-menu</a>
                <ul>
                  <li><a href="#" class="menu__item">Bacon</a></li>
                  <li><a href="#" class="menu__item">Ipsum</a></li>
                  <li class="hasSubmenu"> <a href="#" class="menu__item">Sub-sub-menu!</a>
                    <ul>
                      <li><a href="#" class="menu__item">Bacon</a></li>
                      <li><a href="#" class="menu__item">Ipsum</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  `;
};

export const OnClick = () => {
  return /* html */ `
    <div class="grid">
      <div class="col-desk-3">
        <code>Select option</code>
        <div class="dropdown">
          <form class="form">
            <select name="" id="" class="input-control input--rounded ">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
            <span class="icon icon--transparent dark">
              <i class="pe-7s-keypad dark"></i>
            </span>
          </form>
        </div>
      </div>
      <div class="col-desk-3"></div>
      <div class="col-desk-3">
        <code>dropdown menu</code>
        <div class="dropdown">
          <button class="btn btn--dropdown">Dropdown</button>
          <div class="dropdown__content">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </div>
  `;
};
