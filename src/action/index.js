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
    const res = await api.post("/user/signIn", {
      username: username,
      password: password,
    });
    dispatch({ type: reduxType.FETCH_LOGIN_USER, payload: res.data });
  };

// export const userLogin =
//   ({ username, password }) =>
//   async (dispatch) => {
//     let signs = localStorage.getItem("signs");
//     if (!signs && signs.user.username !== username) {
//       const res = await api.post("/user/signIn", {
//         username: username,
//         password: password,
//       });
//       localStorage.setItem("signs", JSON.stringify(res.data));
//       signs = localStorage.getItem("signs");
//       console.log(signs);
//     }
//     dispatch({ type: reduxType.FETCH_LOGIN_USER, payload: JSON.parse(signs) });
//   };

export const logout = () => (dispatch) => {
  dispatch({ type: reduxType.FETCH_LOGOUT_USER, payload: {} });
};

export const fetchUser = () => async (dispatch) => {
  const res = await api.get("/user/showuser");
  dispatch({ type: reduxType.FETCH_SEARCH_USER, payload: res.data });
};

export const randomUser =
  (
    gender,
    passion,
    frind_id,
    likes,
    unlikes,
    superlikes,
    location,
    MaxDistance
  ) =>
  async (dispatch) => {
    let dontshow_id = frind_id.concat(likes, unlikes, superlikes);
    const res = await api.post("/user/randomuser", {
      gender: gender,
      passion: passion,
      _id: dontshow_id,
      location: location,
      MaxDistance: MaxDistance,
    });
    // console.log(dontshow_id);
    dispatch({ type: reduxType.FETCH_RANDOM_USER, payload: res.data });
  };

export const likeUser = (like, myid) => async (dispatch) => {
  const res = await api.patch("/user/like/" + myid, {
    likes: like,
  });
};

export const unlikeUser = (unlike, myid) => async (dispatch) => {
  const res = await api.post("/user/unlike" + myid, {
    unlikes: unlike,
  });
};

export const superlikeUser = (superlike, myid) => async (dispatch) => {
  const res = await api.post("/user/superlike" + myid, {
    superlikes: superlike,
  });
};

export const updateUser =
  (myid, title, { value }) =>
  async (dispatch) => {
    const res = await api.patch("/user/updateuser" + myid, {
      value,
    });
  };


  export const checkMatch = (myid , taketdata) =>  {
    let taketlike = taketdata.userDetails.likes.concat(taketdata.userDetails.superlikes)
    const found = taketlike.find(element => element == myid);
    if(found){
      console.log("you match");
      
    }

  };