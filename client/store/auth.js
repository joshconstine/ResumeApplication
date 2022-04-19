import axios from "axios";
import history from "../history";
import { ref, set, getStorage, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { uid } from "uid";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
const TOKEN = "token";

/**
 * ACTION TYPES
 */
const SET_AUTH = "SET_AUTH";

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });

/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get("/auth/me", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuth(res.data));
  }
};

export const fetchCreateGoal = (goal) => async (dispatch) => {
  try {
    const res = await axios.patch(`/auth/goal`, goal, {
      headers: {
        Authorization: window.localStorage.getItem("token"),
        Goal: goal,
      },
    });
    dispatch(me());
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

export const updateUser = (user) => async (dispatch) => {
  try {
    const res = await axios.patch(`/auth/me`, user, {
      headers: {
        Authorization: window.localStorage.getItem("token"),
      },
    });
    history.push("/home");
    // dispatch(me());
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};
export const signup = (email, password) => async (dispatch) => {
  try {
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(createdUser);
    history.push("/profile");
    dispatch(setAuth(createdUser));
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  history.push("/login");
  return {
    type: SET_AUTH,
    auth: {},
  };
};
export const addPhoto = (img) => {
  const imgref = ref(storage, "joshimg.jpg");
  uploadBytes(imgref, img).then((snapshot) => {
    console.log("Uploaded a blob or file!", img);
  });
  return {};
};

/**
 * REDUCER
 */

export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
