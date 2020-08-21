import postBg1 from '../../assets/images/post1.png';
import postBg2 from '../../assets/images/post2.png';
export default {
  title: 'Components/Post',
};

export const Card = () => {
  return /* html */ `
    <div class="grid">
      <div class="col-desk-6">
        <div class="post">
          <a href="">
            <div class="aspect-img">
              <img src="${postBg1}" alt=""/>
            </div>
            <div class="post-detail text-center">
              <h3 class="category">LIFESTYLE</h3>
              <p class="post__title">THIS MISTAKEN IDEA</p>
            </div>
            <span class="icon icon--rounded">
              <i class="pe-7s-play"></i>
            </span>
          </a>
        </div>
      </div>

      <div class="col-desk-6">
        <div class="post">
          <a href="">
            <div class="aspect-img">
              <img src="${postBg2}" alt=""/>
            </div>
            <div class="post-detail text-center">
              <h3 class="category">LIFESTYLE</h3>
              <p class="post__title">THIS MISTAKEN IDEA</p>
            </div>
            <span class="icon icon--rounded">
              <i class="pe-7s-play"></i>
            </span>
          </a>
        </div>
      </div>

      <div class="col-desk-12 mt-5">
        <div class="post">
          <a href="">
            <div class="aspect-img">
              <img src="${postBg2}" alt=""/>
            </div>
            <div class="post-detail text-center">
              <h3 class="category">LIFESTYLE</h3>
              <p class="post__title">THIS MISTAKEN IDEA</p>
            </div>
            <span class="icon icon--rounded">
              <i class="pe-7s-play"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  `;
};
