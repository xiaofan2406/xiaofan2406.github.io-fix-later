import { combineReducers } from 'redux';

import portfolioReducer from 'src/app/Portfolio/portfolio-dux';
import { reducer as reduxPlayerReducer } from 'redux-player';


export default combineReducers({
  portfolio: portfolioReducer,
  reduxPlayer: reduxPlayerReducer
});
