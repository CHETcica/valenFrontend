import reduxType from "../config/reduxType";

const reducer = (state = [], action) => {
  switch (action.type) {
    case reduxType.FETCH_RANDOM_PHOTO:
      return [...action.payload];
    case reduxType.FETCH_SEARCH_PHOTO:
      return [...action.payload];
    case reduxType.FETCH_SEARCH_USERALBUM:
      return [...action.payload];
    case reduxType.FETCH_LIKE_PHOTO:
      return [...action.payload];
    default:
      return state;

  }
};

export default reducer;
