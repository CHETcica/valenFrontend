import reduxType from "../config/reduxType";
import api from "../api";

export const fetchAllUser = () => async (dispatch) => {
  const res = await api.get("/user/showuser");
  dispatch({ type: reduxType.FETCH_SEARCH_USER, payload: res.data });
};

export const userSignup = (username, email, password, born) => async (dispatch) => {
  const res = await api.post('/user/signUp',{
      username: username,
      email: email,
      password: password,
      born: born
  } );
  console.log(res.data)
  dispatch({ type: reduxType.FETCH_LOGIN_USER, payload: res.data });
  
};

export const userLogin = (username, password) => async (dispatch) => {
  const res = await api.post('/user/signIn',{
      username: username,
      password: password
  } );
  console.log(res.data)
  dispatch({ type: reduxType.FETCH_LOGIN_USER, payload: res.data });
  
};

export const fetchUser = () => async (dispatch) => {
  const res = await api.get("/user/showuser");
  dispatch({ type: reduxType.FETCH_SEARCH_USER, payload: res.data });
};
