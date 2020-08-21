import bannerImage1 from '../../assets/images/banner1.png';
import bannerImage2 from '../../assets/images/banner2.png';
import dividerImage from '../../assets/images/divider.png';

export default {
  title: 'Components/Background',
};

export const BackgroundImage = () => {
  return /* html */ `
    <div class="grid-fluid">
      <div class="col-desk-12">
        <h2>Content center</h2>
      </div>
      <div class="col-desk-12">
        <div class="background background--image background--center" style="background-image: url('${bannerImage1}')">
          <h3 class="background__title"><span>B</span>M.</h3>
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
        </div>

      </div>

      <hr>

      <div class="col-desk-12">
        <h2>Content left</h2>
      </div>
      <div class="col-desk-12">
        <div class="background background--image" style="background-image: url('${bannerImage2}')">
          <h3 class="background__title">my portfolio</h3>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb pl-0">
              <li class="breadcrumb__item">
                <a href="#" class="breadcrumb__link text-white">Home</a>
              </li>
              <li class="breadcrumb__item">
                <a href="#" class="breadcrumb__link text-white">About</a>
              </li>
              <li class="breadcrumb__item active">
                <a href="#" class="breadcrumb__link text-white">Contact</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  `;
};

// export const BackgroundColor = () => {
//   return /*html*/ `
//     <div class="grid-fluid">
//       <div class="col-desk-12">

//       </div>
//     </div>
//   `;
// };
