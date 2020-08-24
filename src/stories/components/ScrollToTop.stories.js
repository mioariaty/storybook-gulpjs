export default {
  title: 'Components/Scroll to top',
};

export const ScrollToTop = () => {
  return /* html */ `
    <div class="grid-fluid">
      <div class="col-desk-12 mt-5">
        <button class="btn btn--scroll">
          <span>
            scroll to top
          </span>
          <i class="pe-7s-upload"></i>
        </button>
      </div>
    </div>
  `;
};
