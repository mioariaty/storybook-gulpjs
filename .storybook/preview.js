import '!style-loader!css-loader!sass-loader!import-glob-loader!../src/assets/scss/styles.scss';
import '../src/assets/js/scripts.js';
import '../src/assets/js/menu';
import '../src/assets/js/tab';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
