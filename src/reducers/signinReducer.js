import reduxType from "../config/reduxType";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case reduxType.FETCH_LOGIN_USER:
      return action.payload;
    case reduxType.FETCH_SIGNUP_USER:
      return action.payload;
    case reduxType.FETCH_LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default reducer;
