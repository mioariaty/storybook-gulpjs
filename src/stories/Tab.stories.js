import Tab from '../assets/js/tab';

export default {
  title: 'Components/Tab',
};

export const Horizontal = () => {
  return /* html */ `
    <div id="tab-horizon"  class="tab-wrapper tab--horizontal">
      <ul class="tab__nav">
        <li class="tab__item">
          <a href="#" class="tab__link is-active">tab link 1</a>
        </li>
        <li class="tab__item">
          <a href="#" class="tab__link">tab link 2</a>
        </li>
        <li class="tab__item">
          <a href="#" class="tab__link">tab link 3</a>
        </li>
      </ul>

      <div class="tab__content">
        <div class="tab__pane is-active">
          <p>
            content thứ 1
          </p>
        </div>
        <div class="tab__pane">
          <p>
            content thứ 2
          </p>
        </div>
        <div class="tab__pane">
          <p>
            content thứ 3
          </p>
        </div>
      </div>
    </div>
  `;
};

export const Vertical = () => {
  return /*html*/ `
    <div id="tab-vertical" class="tab-wrapper tab--vertical">
      <ul class="tab__nav">
        <li class="tab__item">
          <a href="#" class="tab__link is-active">tab link 1</a>
        </li>
        <li class="tab__item">
          <a href="#" class="tab__link">tab link 2</a>
        </li>
        <li class="tab__item">
          <a href="#" class="tab__link">tab link 3</a>
        </li>
      </ul>

      <div class="tab__content">
        <div class="tab__pane is-active">
          <p>
            content thứ 1
          </p>
        </div>
        <div class="tab__pane">
          <p>
            content thứ 2
          </p>
        </div>
        <div class="tab__pane">
          <p>
            content thứ 3
          </p>
        </div>
      </div>
    </div>
  `;
};
