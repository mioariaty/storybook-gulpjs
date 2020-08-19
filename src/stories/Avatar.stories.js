import avatarImage from '../assets/images/avatar.png';

export default {
  title: 'Components/Avatar',
};

export const Default = () => {
  return /* html */ `
    <div class="avatar">
      <img src="${avatarImage}" alt=""/>
    </div>
  `;
};

export const Small = () => {
  return /* html */ `
    <div class="avatar avatar--small">
      <img src="${avatarImage}" alt=""/>
    </div>
  `;
};
