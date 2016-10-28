import { combineReducers } from 'redux';

// import other reducers for this appliction
// this file should not define any new reducers
import homeReducer from 'src/app/Home/home-dux';
import portfolioReducer from 'src/app/Portfolio/portfolio-dux';


export default combineReducers({
  home: homeReducer,
  portfolio: portfolioReducer
});
