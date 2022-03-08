import reduxType from "../config/reduxType";
import api from "../api";

export const fetchAllUser = () => async (dispatch) => {
  const res = await api.get("/user/showuser");
  dispatch({ type: reduxType.FETCH_SEARCH_USER, payload: res.data });
};

export const userSignup =
  (username, email, password, born) => async (dispatch) => {
    const res = await api.post("/user/signUp", {
      username: username,
      email: email,
      password: password,
      born: born,
    });
    console.log(res.data);
    dispatch({ type: reduxType.FETCH_SIGNUP_USER, payload: res.data });
  };

export const userLogin = (username, password) => async (dispatch) => {
  let signs = localStorage.getItem("signs");
  if (!signs) {
    const res = await api.post("/user/signIn", {
      username: username,
      password: password,
    });
    localStorage.setItem("signs", JSON.stringify(res.data));
    signs = localStorage.getItem("signs");
    console.log(signs);
  }
  dispatch({ type: reduxType.FETCH_LOGIN_USER, payload: JSON.parse(signs) });
  console.log("Login");
};

export const fetchUser = () => async (dispatch) => {
  const res = await api.get("/user/showuser");
  dispatch({ type: reduxType.FETCH_SEARCH_USER, payload: res.data });
};

export const randomUser = () => async (dispatch) => {
  const res = await api.get("/user/randomuser");
  dispatch({ type: reduxType.FETCH_RANDOM_USER, payload: res.data });
};