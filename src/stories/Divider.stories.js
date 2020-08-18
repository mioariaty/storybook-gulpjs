export default {
  title: 'Components/Divider',
};

export const Horizontal = () => {
  return /*html*/ `
    <div class="divider">
      <img src=".dev/assets/images/divider.png">
    </div>
  `;
};

export const Vertical = () => {
  return /*html*/ `
    <div class="divider divider--vertical">
      <img src=".dev/assets/images/divider.png" >
    </div>
  `;
};
