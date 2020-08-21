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
    <button class="btn">
      <i class="pe-7s-upload"></i>
      <span>
        scroll to top
      </span>
    </button>
  `;
};
