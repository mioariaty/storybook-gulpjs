import dividerImage from '../assets/images/divider.png';
export default {
  title: 'Components/Divider',
};

export const Horizontal = () => {
  return /*html*/ `
    <div class="divider">
      <img src="${dividerImage}">
    </div>
  `;
};

export const Vertical = () => {
  return /*html*/ `
    <div class="divider divider--vertical">
      <img src="${dividerImage}">
    </div>
  `;
};
