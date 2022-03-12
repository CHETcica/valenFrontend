import reduxType from "../config/reduxType";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case reduxType.FETCH_SEARCH_USER:
      return action.payload;
    case reduxType.FETCH_RANDOM_USER:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
