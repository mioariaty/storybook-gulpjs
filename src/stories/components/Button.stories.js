export default {
  title: 'Components/Button',
};

export const Primary = () => {
  return /* html */ `
    <button class="btn">
      Button Primary
    </button>
  `;
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
