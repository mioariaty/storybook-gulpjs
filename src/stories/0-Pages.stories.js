import getBody from './utils';
import home from '!source-loader!../index.html';

export default {
  title: 'Pages',
};

export const Home = () => {
  return getBody(home);
};
