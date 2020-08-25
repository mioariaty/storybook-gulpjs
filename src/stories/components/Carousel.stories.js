import sliderImage1 from '../../assets/images/slider1.png';
import slideImg2 from '../../assets/images/slide3.png';
import avatarImg from '../../assets/images/avatar.png';

export default {
  title: 'Components/Carousel',
};

export const Vertical = () => {
  return /* html */ `
    <div class="grid">
      <div class="col-desk-12">
        <h2>Refresh the page to get scripts</h2>
        <hr/>
      </div>

      <div class="col-desk-12">
        <div class="carousel carousel--vertial">
          <div class="demo1 swiper-container">
            <!-- Slide wrapper -->
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div
                  class="background background--image background-height--large pb-0"
                  style="background-image: url('${sliderImage1}')">
                  <div class="carousel__detail">
                    <h3 class="background__title">my portfolio</h3>
                    <p class="text-white background__desc">
                      On the other hand, we denounce with righteous indination and dislike men.
                    </p>
                  </div>
                  <p class="category uppercase category-absolute--center">
                    photography
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class="background background--image background-height--large pb-0"
                  style="background-image: url('${sliderImage1}')">
                  <div class="carousel__detail">
                    <h3 class="background__title">my portfolio</h3>
                    <p class="text-white background__desc">
                      On the other hand, we denounce with righteous indination and dislike men.
                    </p>
                  </div>
                  <p class="category uppercase category-absolute--center">
                    photography
                  </p>
                </div>
              </div>
              <div class="swiper-slide">
                <div
                  class="background background--image background-height--large pb-0"
                  style="background-image: url('${sliderImage1}')">
                  <div class="carousel__detail">
                    <h3 class="background__title">my portfolio</h3>
                    <p class="text-white background__desc">
                      On the other hand, we denounce with righteous indination and dislike men.
                    </p>
                  </div>
                  <p class="category uppercase category-absolute--center">
                    photography
                  </p>
                </div>
              </div>
            </div>
            <!-- End slide wrapper -->

            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <a href="" class="icon icon--rounded icon--shadow icon-absolute--bot">
            <i class="pe-7s-play"></i>
          </a>
        </div>
      </div>
    </div>
  `;
};

export const Horizontal = () => {
  return /* html */ `
    <div class="grid">
      <div class="col-desk-12">
        <h2>Refresh the page to get scripts</h2>
        <hr/>
      </div>

      <div class="col-desk-10 mx-auto">
        <div class="carousel casousel--horizontal bg-dark">

          <div class="demo3 swiper-container">
              <!-- Slide wrapper -->
              <div class="swiper-wrapper">

                <div class="swiper-slide">
                  <div class="background">
                    <p class="background__desc m-0 p-0 gray3">DIGNISSIMOS DUCIMUS</p>
                    <div class="avatar avatar--small">
                      <img src="${avatarImg}" alt=""/>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="background">
                    <div class="avatar avatar--small">
                      <img src="${avatarImg}" alt=""/>
                    </div>
                    <p class="background__desc m-0 p-0 gray3">DIGNISSIMOS DUCIMUS</p>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="background">
                    <p class=" background__desc m-0 p-0 gray3">DIGNISSIMOS DUCIMUS</p>
                    <div class="avatar avatar--small">
                      <img src="${avatarImg}" alt=""/>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="background">
                    <div class="avatar avatar--small">
                      <img src="${avatarImg}" alt=""/>
                    </div>
                    <p class=" background__desc m-0 p-0 gray3">DIGNISSIMOS DUCIMUS</p>
                  </div>
                </div>

            </div>  <!-- End slide wrapper -->

            <!-- Add Arrows -->
            <div class="swiper-button-next">
              <span class="icon icon--transparent">
                <i class="pe-7s-play"></i>
              </span>
            </div>
            <div class="swiper-button-prev">
              <span class="icon icon--reverse icon--transparent">
                <i class="pe-7s-play"></i>
              </span>
            </div>
          <!-- end carousel -->
          </div>

          <div class="icon icon--transparent">
            <i class="pe-7s-keypad"></i>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const Fraction = () => {
  return /* html */ `
    <div class="grid">
      <div class="col-desk-12">
        <h2>Refresh the page to get scripts</h2>
        <hr/>
      </div>

      <div class="col-desk-12">
        <div class="carousel carousel--fraction">

          <div class="demo2 swiper-container">
            <!-- Slide wrapper -->
            <div class="swiper-wrapper">

              <div class="swiper-slide">
                <div
                  class="background background--image background-height--medium pb-0"
                  style="background-image: url('${slideImg2}')">
                </div>
              </div>

              <div class="swiper-slide">
                <div
                  class="background background--image background-height--medium pb-0"
                  style="background-image: url('${slideImg2}')">
                </div>
              </div>


            </div>  <!-- End slide wrapper -->

            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next">
              <span class="icon icon--transparent">
                <i class="pe-7s-play"></i>
              </span>
            </div>
            <div class="swiper-button-prev">
              <span class="icon icon--reverse icon--transparent">
                <i class="pe-7s-play"></i>
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  `;
};
