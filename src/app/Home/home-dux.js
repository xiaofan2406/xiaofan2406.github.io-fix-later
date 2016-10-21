// export all action types
export const actionTypes = {
  SET_HASH: 'SET_HASH'
};


// export all actions
export const actions = {
  setHash: hash => ({
    type: actionTypes.SET_HASH,
    payload: hash
  })
};


const initialState = {
  hash: ''
};

// export the reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_HASH:
      return {
        ...state,
        hash: action.payload
      };
    default:
      return state;
  }
}


// export all selectors
export const selectors = {
  getHash: state => state.hash
};
