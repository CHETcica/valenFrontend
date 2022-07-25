import reduxType from "../config/reduxType";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case reduxType.FETCH_SEARCH_HISTORY:
      return action.payload;
    
    default:
      return state;
  }
};

export default reducer;