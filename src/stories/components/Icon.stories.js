import { solidIcon, regularIcon, brandIcon } from '../helpers/fontawesome';

export default {
  title: 'Components/Font Awesome',
};

export const Solid = () => {
  return /* html */ `
    <div class="grid-fluid">
      ${solidIcon
        .map((icon) => {
          return /* html */ `
          <div class="col-desk-2 text-center">
            <i class="${icon}"></i>
            <p>${icon}</p>
          </div>
        `;
        })
        .join('')}
    </div>
  `;
};

export const Regular = () => {
  return /* html */ `
    <div class="grid-fluid">
      ${regularIcon
        .map((icon) => {
          return /* html */ `
          <div class="col-desk-2 text-center">
            <i class="${icon}"></i>
            <p>${icon}</p>
          </div>
        `;
        })
        .join('')}
    </div>
  `;
};

export const Brand = () => {
  return /* html */ `
    <div class="grid-fluid">
      ${brandIcon
        .map((icon) => {
          return /* html */ `
          <div class="col-desk-2 text-center">
            <i class="${icon}"></i>
            <p>${icon}</p>
          </div>
        `;
        })
        .join('')}
    </div>
  `;
};
