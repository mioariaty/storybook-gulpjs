export default {
  title: 'Components/Navbar',
};

export const LightBackground = () => {
  return /* html */ `
    <h2>Refresh the page to get scripts</h2>
    <hr/>

    <div class="grid">
      <div class="col-desk-4">
        <h2>light background</h2>
      </div>
      <div class="col-desk-12">
        <nav class="navbar">
          <a href="#" class="navbar__brand"><span>B</span>M.</a>
          <button class="navbar__toggler">
            <i class="fas fa-bars"></i>
          </button>

          <div class="navbar-collapse">
            <button class="btn--close">
              <i class="fas fa-times"></i>
            </button>
            <ul class="navbar-nav">
              <li class="nav__item">
                <a href="#" class="nav__link">Home</a>
              </li>

              <li class="nav__item">
                <a href="#" class="nav__link">About</a>
              </li>

              <li class="nav__item">
                <a href="#" class="nav__link">Portfolio</a>
              </li>

              <li class="nav__item">
                <a href="#" class="nav__link">Blog</a>
              </li>

              <li class="nav__item">
                <a href="#" class="nav__link">Contact</a>
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
  `;
};

export const BlackBackground = () => {
  return /* html */ `
    <h2>Refresh the page to get scripts</h2>
    <hr/>
    <div class="grid">
      <div class="col-desk-4"><h2>Dark background</h2></div>
        <div class="col-desk-12">
          <nav class="navbar bg-dark">
            <a href="#" class="navbar__brand text-white"><span>B</span>M.</a>
            <button class="navbar__toggler">
              <i class="fas fa-bars"></i>
            </button>

            <div class="navbar-collapse">
              <button class="btn--close">
                <i class="fas fa-times"></i>
              </button>
              <ul class="navbar-nav">
                <li class="nav__item">
                  <a href="#" class="nav__link text-white">Home</a>
                </li>

                <li class="nav__item">
                  <a href="#" class="nav__link text-white">About</a>
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
    </div>
  `;
};
