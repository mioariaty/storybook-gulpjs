export default {
  title: 'Components/Navbar',
};

export const Default = () => {
  return /* html */ `
    <nav class="navbar">
      <a href="#" class="navbar__brand"><span>B</span>M.</a>
      <button class="navbar__toggler">
        <i class="far fa-bars"></i>
      </button>

      <div class="navbar-collapse">
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
          <div class="form-item row m-0">
            <input type="search" placeholder="Search" class="form-item__input input--rounded input--search" >
            <button class="btn btn--search">
              <i class="pe-7s-search"></i>
            </button>
          </div>
        </form>

      </div>
    </nav>
  `;
};
