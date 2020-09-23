import bg from '../../assets/images/bg.png';
export default {
  title: 'Layouts/Horizontal Page',
};
export const Default = () => {
  return /* html */ `
    <div class="horizontal-layout background--image" style="background-image: url('${bg}')">
      <div class="divider--outline divider-outline--absolute">
        <!-- nav -->
        <div class="grid">
          <div class="col-desk-12">
            <nav class="navbar">
              <a href="#" class="navbar__brand text-white"><span>B</span>M.</a>
              <button class="navbar__toggler">
                <i class="fas fa-bars"></i>
              </button>

              <div class="navbar-collapse">
                <button class="btn--close">
                  <i class="fas fa-times"></i>
                </button>
                <ul class="navbar-nav menu -horizontal">
                  <li class="nav__item ">
                    <a href="#" class="nav__link light text-white ">Home</a>
                  </li>

                  <li class="nav__item hasSubmenu">
                    <a href="#" class="nav__link text-white menu__item">About</a>
                    <!-- sub menu -->
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
                    <!-- !sub menu -->
                  </li>

                  <li class="nav__item">
                    <a href="#" class="nav__link text-white">Portfolio</a>
                  </li>

                  <li class="nav__item">
                    <a href="#" class="nav__link text-white">Blog</a>
                  </li>

                  <li class="nav__item">
                    <a href="#" class="nav__link text-white">Contact</a>
                  </li>
                </ul>

                <form class="form form--horizontal">
                  <input type="search" placeholder="Search" class="form-item__input input--rounded input--search bg-gray2" id="searchInput">
                  <button class="btn btn--search bg-gray2">
                    <i class="pe-7s-search"></i>
                  </button>
                </form>

              </div>
            </nav>
          </div>
        </div>
        <!-- !nav -->

        <div class="grid">
          <div class="col-desk-12">
            <div id="content-1">
              <p class="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit mollitia expedita repellat aliquam quos dignissimos, commodi aut unde nostrum! Dolor quis ea, similique id nemo nihil hic a molestias.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit mollitia expedita repellat aliquam quos dignissimos, commodi aut unde nostrum! Dolor quis ea, similique id nemo nihil hic a molestias.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit mollitia expedita repellat aliquam quos dignissimos, commodi aut unde nostrum! Dolor quis ea, similique id nemo nihil hic a molestias.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit mollitia expedita repellat aliquam quos dignissimos, commodi aut unde nostrum! Dolor quis ea, similique id nemo nihil hic a molestias.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit mollitia expedita repellat aliquam quos dignissimos, commodi aut unde nostrum! Dolor quis ea, similique id nemo nihil hic a molestias.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit mollitia expedita repellat aliquam quos dignissimos, commodi aut unde nostrum! Dolor quis ea, similique id nemo nihil hic a molestias.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit mollitia expedita repellat aliquam quos dignissimos, commodi aut unde nostrum! Dolor quis ea, similique id nemo nihil hic a molestias.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit mollitia expedita repellat aliquam quos dignissimos, commodi aut unde nostrum! Dolor quis ea, similique id nemo nihil hic a molestias.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit mollitia expedita repellat aliquam quos dignissimos, commodi aut unde nostrum! Dolor quis ea, similique id nemo nihil hic a molestias.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit mollitia expedita repellat aliquam quos dignissimos, commodi aut unde nostrum! Dolor quis ea, similique id nemo nihil hic a molestias.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit mollitia expedita repellat aliquam quos dignissimos, commodi aut unde nostrum! Dolor quis ea, similique id nemo nihil hic a molestias.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. At suscipit mollitia expedita repellat aliquam quos dignissimos, commodi aut unde nostrum! Dolor quis ea, similique id nemo nihil hic a molestias.

              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
};
