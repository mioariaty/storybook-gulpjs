export default {
  title: 'Components/Pagination',
};

export const Default = () => {
  return /*html*/ `
    <div class="grd">
      <div class="col-12">
        <ul class="pagination">
          <li class="pagination__next">
            <a href="" class="icon icon--reverse icon--transparent justify-inherit">
              <i class="pe-7s-play primary"></i>
            </a>
          </li>
          <li class="pagination__item">
            <a href="" class="pagination__link">1</a>
          </li>
          <li class="pagination__item active">
            <p class="pagination__link">2</p>
          </li>
          <li class="pagination__item">
            <a href="" class="pagination__link">3</a>
          </li>
          <li class="pagination__item">
            <a href="" class="pagination__link">4</a>
          </li>
          <li class="pagination__item">
            <a href="" class="pagination__link">5</a>
          </li>
          <li class="pagination__next">
            <a href="" class="icon icon--transparent justify-inherit">
              <i class="pe-7s-play primary"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  `;
};

export const PaginationImage = () => {
  return /* html */ `

  `;
};
