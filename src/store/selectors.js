// import other reducers for this appliction
// this file should not define any new reducers
import { selectors as home } from 'src/app/Home/home-dux';
import { selectors as portfolio } from 'src/app/Portfolio/portfolio-dux';

export const getHomeHash = state => home.getHash(state.home);
export const getHomeActiveLineTitle = state => home.getActiveLineTitle(state.home);
export const getHomeHoveredLineTitle = state => home.getHoveredLineTitle(state.home);

export const isListLoading = state => portfolio.isLoading(state.portfolio);
export const getListError = state => portfolio.getError(state.portfolio);
export const getInfoList = state => portfolio.getInfoList(state.portfolio);
export const getCurrent = state => portfolio.getCurrent(state.portfolio);
export const getDisplayMode = state => portfolio.getMode(state.portfolio);


/* selectors for all states */
export default {
  getHomeHash,
  getHomeActiveLineTitle,
  getHomeHoveredLineTitle,
  isListLoading,
  getListError,
  getInfoList,
  getCurrent,
  getDisplayMode
};
