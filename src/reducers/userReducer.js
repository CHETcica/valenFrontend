import reduxType from "../config/reduxType";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case reduxType.FETCH_SEARCH_USER:
      return action.payload;
    case reduxType.FETCH_LOGIN_USER:
      return action.payload;
    case reduxType.FETCH_SIGNUP_USER:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
