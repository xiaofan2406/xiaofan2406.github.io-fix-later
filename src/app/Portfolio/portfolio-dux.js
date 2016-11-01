import { combineReducers } from 'redux';
import { stop } from 'redux-player/src/actions';

export const actionTypes = {
  START_LOADING: 'START_LOADING',
  FINISH_LOADING: 'FINISH_LOADING',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_INFOLIST: 'SET_INFOLIST',
  SWITCH_MODE: 'SWITCH_MODE'
};

export const actions = {
  startLoading: () => ({
    type: actionTypes.START_LOADING
  }),

  finishLoading: () => ({
    type: actionTypes.FINISH_LOADING
  }),

  setError: err => ({
    type: actionTypes.SET_ERROR,
    payload: err
  }),

  clearError: () => ({
    type: actionTypes.CLEAR_ERROR
  }),

  setInfoList: infoList => ({
    type: actionTypes.SET_INFOLIST,
    payload: infoList
  }),

  switchMode: () => (dispatch) => {
    dispatch(stop()); // stop playing when switch to gallery mode
    dispatch({
      type: actionTypes.SWITCH_MODE
    });
  },

  loadingSuccess: infoList => (dispatch) => {
    dispatch(actions.clearError());
    dispatch(actions.setInfoList(infoList));
    dispatch(actions.finishLoading());
  },

  loadingFail: err => (dispatch) => {
    dispatch(actions.setError(err));
    dispatch(actions.finishLoading());
  }
};


function loadingReducer(state = true, action) {
  switch (action.type) {
    case actionTypes.FINISH_LOADING:
      return false;
    case actionTypes.START_LOADING:
      return true;
    default:
      return state;
  }
}

function errorReducer(state = null, action) {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return action.payload;
    case actionTypes.CLEAR_ERROR:
      return null;
    default:
      return state;
  }
}

function infoListReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.SET_INFOLIST:
      return action.payload;
    default:
      return state;
  }
}

function modeReducer(state = 'player', action) {
  switch (action.type) {
    case actionTypes.SWITCH_MODE:
      return state === 'player' ? 'gallery' : 'player';
    default:
      return state;
  }
}


export default combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  infoList: infoListReducer,
  mode: modeReducer
});


export const selectors = {
  isLoading: state => state.loading,
  getError: state => state.error,
  getInfoList: state => state.infoList,
  getMode: state => state.mode
};
