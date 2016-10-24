// export all action types
export const actionTypes = {
  SET_HASH: 'SET_HASH',
  SET_ACTIVE_LINE_TITLE: 'SET_ACTIVE_LINE_TITLE',
  BLUR_ACTIVE_LINE: 'BLUR_ACTIVE_LINE'
};


// export all actions
export const actions = {
  setHash: hash => ({
    type: actionTypes.SET_HASH,
    payload: hash
  }),
  setActiveLineTitle: title => ({
    type: actionTypes.SET_ACTIVE_LINE_TITLE,
    payload: title
  }),
  blurActiveLine: title => ({
    type: actionTypes.BLUR_ACTIVE_LINE,
    payload: title
  })
};


const initialState = {
  hash: '',
  activeLineTitle: '',
  hoveredLineTitle: ''
};

// export the reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_HASH:
      return {
        ...state,
        hash: action.payload
      };
    case actionTypes.SET_ACTIVE_LINE_TITLE:
      return {
        ...state,
        hoveredLineTitle: action.payload,
        activeLineTitle: action.payload
      };
    case actionTypes.BLUR_ACTIVE_LINE:
      return {
        ...state,
        hoveredLineTitle: ''
      };
    default:
      return state;
  }
}


// export all selectors
export const selectors = {
  getHash: state => state.hash,
  getActiveLineTitle: state => state.activeLineTitle,
  getHoveredLineTitle: state => state.hoveredLineTitle
};
