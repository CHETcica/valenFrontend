import reduxType from "../config/reduxType";
import api from "../api";


export const updateUserAddress = (myid, value) => async (dispatch) => {
  console.log(myid, value);
    const res = await api.patch("/user/updateuseraddress/" + myid, {
    address: value,
  });
};
