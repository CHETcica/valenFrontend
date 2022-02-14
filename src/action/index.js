import reduxType from '../config/reduxType';
import api from '../api';


export const fetchRandomPhoto = () => async (dispatch) => {
  let photo = localStorage.getItem("photos")
  if(!photo){
    const res = await api.get('/photos/random', {
      params: {
        count: 12,
        orientation: 'portrait',
      },
    });
    localStorage.setItem("photos", JSON.stringify(res.data))
    photo = localStorage.getItem("photos")
  }
  // console.log(photo);
  dispatch({ type: reduxType.FETCH_RANDOM_PHOTO, payload: JSON.parse(photo) });
};

export const fetchSearchPhoto = (search) => async (dispatch) => {
    const res = await api.get('/search/photos', {
      params: {
        count: 12,
        query: search,
        orientation: 'portrait',
      },
    });
    // console.log(res.data);
  // console.log(photo); 
  dispatch({ type: reduxType.FETCH_SEARCH_PHOTO, payload: res.data.results });
};

export const fetchUser = (username) => async (dispatch) => {
  // console.log(`fetch user by username :${ userName}`)
  const res = await api.get(`/users/${username}`);
  // console.log(res.data);
dispatch({ type: reduxType.FETCH_SEARCH_USER, payload: res.data });
};

export const fetchUserAlbum = (userName) => async (dispatch) => {
  const res = await api.get(`/users/${userName}/photos`);
dispatch({ type: reduxType.FETCH_SEARCH_USERALBUM, payload: res.data });
};

export const likePhoto = (IdPhoto) => async (dispatch) => {
  const res = await api.post(`/photos/${IdPhoto}/like`);
  console.log(res.data);
dispatch({ type: reduxType.FETCH_LIKE_PHOTO, payload: res.data });
};