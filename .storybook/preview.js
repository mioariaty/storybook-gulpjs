import '!style-loader!css-loader!sass-loader!import-glob-loader!../src/assets/scss/styles.scss';
import '../src/assets/js/menu';
import '../src/assets/js/tab';
import '../src/assets/js/filter';
import '../src/assets/js/scripts.js';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
