import reduxType from '../config/reduxType';
import api from '../api';

export const fetchAllUser = () => async (dispatch) => {
  const res = await api.get('/user/showuser');
  console.log(res.data);
  dispatch({ type: reduxType.FETCH_SEARCH_USER, payload: res.data })
};

export const userLogin = (username,password) => async (dispatch) => {
  const res = await api.post('/user/signIn');
  console.log(res.data);
  dispatch({ type: reduxType.FETCH_SEARCH_USER, payload: res.data })
};