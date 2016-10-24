// import other reducers for this appliction
// this file should not define any new reducers
import { selectors as home } from 'src/app/Home/home-dux';

export const getHomeHash = state => home.getHash(state.home);
export const getHomeActiveLineTitle = state => home.getActiveLineTitle(state.home);
export const getHomeHoveredLineTitle = state => home.getHoveredLineTitle(state.home);

/* selectors for all states */
export default {
  getHomeHash,
  getHomeActiveLineTitle,
  getHomeHoveredLineTitle
};
