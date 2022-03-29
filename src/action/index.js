import reduxType from "../config/reduxType";
import api from "../api";

export const fetchAllUser = () => async (dispatch) => {
  const res = await api.get("/user/showuser");
  dispatch({ type: reduxType.FETCH_SEARCH_USER, payload: res.data });
};

export const userSignup =
  ({ username, email, password, born }) =>
  async (dispatch) => {
    const res = await api.post("/user/signUp", {
      username: username,
      email: email,
      password: password,
      born: born,
    });
    console.log(res.data);
    dispatch({ type: reduxType.FETCH_SIGNUP_USER, payload: res.data });
  };

export const userLogin =
  ({ username, password }) =>
  async (dispatch) => {
    // let signs = localStorage.getItem("signs");
    // if (!signs) {
    const res = await api.post("/user/signIn", {
      username: username,
      password: password,
    });
    // localStorage.setItem("signs", JSON.stringify(res.data));
    // signs = localStorage.getItem("signs");
    // console.log(signs);
    // }
    // dispatch({ type: reduxType.FETCH_LOGIN_USER, payload: JSON.parse(signs) });
    dispatch({ type: reduxType.FETCH_LOGIN_USER, payload: res.data });
  };

export const logout = () => (dispatch) => {
  dispatch({ type: reduxType.FETCH_LOGOUT_USER, payload: null });
};

export const fetchUser = () => async (dispatch) => {
  const res = await api.get("/user/showuser");
  dispatch({ type: reduxType.FETCH_SEARCH_USER, payload: res.data });
};

export const randomUser =
  (gender, passion, frind_id, likes, unlikes) => async (dispatch) => {
    const res = await api.post("/user/randomuser", {
      gender: gender,
      passion: passion,
      _id: frind_id,
      // likes:likes,
      // unlikes:unlikes
    });

    dispatch({ type: reduxType.FETCH_RANDOM_USER, payload: res.data });
  };

export const likeUser = (likes) => async (dispatch) => {
  const res = await api.post("/user/updateuser", {
    likes: likes,
  });
};
export const superlikeUser = () => async (dispatch) => {
  const res = await api.post("/user/updateuser", {});
};
export const unlikeUser = () => async (dispatch) => {
  const res = await api.post("/user/updateuser", {});
};
