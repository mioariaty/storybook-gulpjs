import boxImage1 from '../assets/images/box1.png';
import boxImage2 from '../assets/images/box2.png';
import boxDefault1 from '../assets/images/box-default1.png';
import dividerBox from '../assets/images/divider-small.png';

export default {
  title: 'Components/Box',
};

export const BoxOverlay = () => {
  return /* html */ `
    <div class="grid">
      <div class="col-desk-12">
        <h2>Hover to show content</h2>
      </div>

      <div class="col-desk-3 col-tab-3 col-mob-12">

        <div class="box box--overlay">
          <a href="">
            <div class="overlay"></div>

            <div class="box__image">
              <img src="${boxImage1}" alt=""/>
            </div>

            <div class="box__details">
              <h3 class="box__title">DENOUNCING PLEASURE</h3>
              <p class="box__desc">Drink & Food</p>
              <img src="${dividerBox}" class="box__divider" alt=""/>
              <p class="box__link">
                <span class="pe-7s-play"></span>
              </p>
            </div>
          </a>
        </div>
      </div>

      <div class="col-desk-3 col-tab-3 col-mob-12">
        <div class="box box--overlay">
          <a href="">
            <div class="overlay"></div>

            <div class="box__image">
              <img src="${boxImage2}" alt=""/>
            </div>

            <div class="box__details">
              <h3 class="box__title">DENOUNCING PLEASURE</h3>
              <p class="box__desc">Drink & Food</p>
              <img src="${dividerBox}" class="box__divider" alt=""/>
              <p class="box__link">
                <span class="pe-7s-play"></span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  `;
};

export const BoxDefault = () => {
  return /* html */ `
    <div class="grid">
      <div class="col-desk-12">
        <h2>Hover to show content</h2>
      </div>
      <div class="col-desk-4">
        <div class="box">
          <a href="">
            <div class="box__image">
              <img src="${boxDefault1}" alt=""/>
              <p class="box__link">
                <span class="pe-7s-play"></span>
              </p>
            </div>
            <div class="box__details">
              <h3 class="box__title">DENOUNCING PLEASURE</h3>
              <p class="box__desc">Drink & Food</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  `;
};
