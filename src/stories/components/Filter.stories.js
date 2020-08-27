import imgBox1 from '../../assets/images/box-default1.png';
import imgBox2 from '../../assets/images/box-default2.png';
import imgBox3 from '../../assets/images/box-default3.png';
import imgBox4 from '../../assets/images/box4.png';
import imgBox5 from '../../assets/images/box5.png';
import imgBox6 from '../../assets/images/box6.png';
import imgBox7 from '../../assets/images/box7.png';
import imgBox8 from '../../assets/images/box8.png';
import imgBox9 from '../../assets/images/box9.png';

export default {
  title: 'Components/Data Filter',
};

export const Vertical = () => {
  return /* html */ `
    <div class="grid-fluid">
      <div class="col-desk-12">

        <h2>Click on a button below to test the Data filter</h2>

        <!-- gallery -->
        <div id="filter-wrapper1" class="gallery">

          <div class="gallery-nav row">
            <div class="gallery-nav__link is-active" data-filter="all">All</div>
            <div class="gallery-nav__link" data-filter="nature">Nature</div>
            <div class="gallery-nav__link" data-filter="drinknfood">Drink & food
            </div>
            <div class="gallery-nav__link" data-filter="garden">Garden</div>
            <div class="gallery-nav__link" data-filter="animator">Animator</div>
          </div>

          <div class="masonry">

            <div class="masonry__item">

              <div class="gallery__item" data-filter='["nature"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox1}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["drinknfood"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox2}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["garden"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox3}" class="img-cover" alt="" />
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



            <!-- col 2 -->

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["drinknfood"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox4}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["nature"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox5}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["animator"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox6}" class="img-cover" alt="" />
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

            <!-- !col 2 -->

            <!-- col 3 -->
            <div class="masonry__item">
              <div class="gallery__item" data-filter='["orange"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox7}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["garden"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox8}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["nature"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox9}" class="img-cover" alt="" />
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

            <!-- !col 3 -->
          </div>


        </div>
        <!-- !gallery -->
      </div>

    </div>
  `;
};

export const Horizontal = () => {
  return /* html */ `
    <div class="grid">
      <div class="col-desk-12">
        <h2>Click on a button below to test the Data filter</h2>
      </div>
    </div>

      <!-- gallery -->
    <div class="gallery">
      <div class="grid-fluid ">

        <div class="col-mob-12 col-desk-3">
          <div class="gallery-nav row row-column">
            <div class="gallery-nav__link is-active" data-filter="all">All</div>
            <div class="gallery-nav__link" data-filter="nature">Nature</div>
            <div class="gallery-nav__link" data-filter="drinknfood">Drink & food</div>
            <div class="gallery-nav__link" data-filter="garden">Garden</div>
            <div class="gallery-nav__link" data-filter="animator">Animator</div>
          </div>
        </div>


      <!-- gallery items -->
        <div class="col-mob-12 col-desk-9">

          <div class="masonry">

            <div class="masonry__item">

              <div class="gallery__item" data-filter='["nature"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox1}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["drinknfood"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox2}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["garden"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox3}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["drinknfood"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox4}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["nature"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox5}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["animator"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox6}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["orange"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox7}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["garden"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox8}" class="img-cover" alt="" />
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

            <div class="masonry__item">
              <div class="gallery__item" data-filter='["nature"]'>
                <div class="box">
                  <a href="">
                    <div class="img-wrapper">
                      <img src="${imgBox9}" class="img-cover" alt="" />
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

          </div>
          <!-- !gallery items -->
        </div>

      </div>

    </div>
      <!-- !gallery -->

  `;
};
