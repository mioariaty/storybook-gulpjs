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

export const Secondary = () => {
  return /* html */ `
    <div class="grid-fluid">
      <div class="col-desk-12 mt-5">
        <button class="btn btn--secondary uppercase">
          Submit
        </button>
      </div>
      <div class="col-desk-12 mt-5">
        <button class="btn icon icon--rounded no-outline m-0 no-border btn--effect p-0">
          <i class="pe-7s-play"></i>
        </button>
      </div>
    </div>
  `;
};
