import { selectors as portfolio } from 'src/app/Portfolio/portfolio-dux';


export const isListLoading = state => portfolio.isLoading(state.portfolio);
export const getListError = state => portfolio.getError(state.portfolio);
export const getInfoList = state => portfolio.getInfoList(state.portfolio);
export const getCurrent = state => portfolio.getCurrent(state.portfolio);
export const getDisplayMode = state => portfolio.getMode(state.portfolio);


/* selectors for all states */
export default {
  isListLoading,
  getListError,
  getInfoList,
  getCurrent,
  getDisplayMode
};
