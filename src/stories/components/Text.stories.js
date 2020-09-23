import imgText from '../../assets/images/bg-food.jpg';

export default {
  title: 'Components/Text',
};

export const TextUnderline = () => {
  return /* html */ `
    <div class="grid">
      <div class="col-desk-12">
        <h2 class="text text--underline uppercase">Journal</h2>
      </div>
    </div>
  `;
};

export const TextImage = () => {
  return /* html */ `
    <div class="grid">
      <div class="col-desk-12">
        <h2 class="text text--image uppercase" style="background-image: url('${imgText}')">Journal</h2>
      </div>
    </div>
  `;
};
