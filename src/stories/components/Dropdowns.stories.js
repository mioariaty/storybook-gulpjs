import '../helpers/menu';

export default {
  title: 'Components/Dropdowns',
};

export const Dropdown = () => {
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
