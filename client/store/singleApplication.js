import axios from "axios";
import { me } from "./auth";
const initialState = {};

const SET_APPLICATION = "SET_APPLICATION";
const UPDATE_APPLICATION = "UPDATE_APPLICATION";

export const setApplication = (application) => {
  return {
    type: SET_APPLICATION,
    application,
  };
};

export const fetchApplication = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/applications/${id}`, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
          id: id,
        },
      });
      await dispatch(setApplication(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateSingleApplication = (application, id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.patch(
        `/api/applications/${id}`,
        application,
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
            id: id,
          },
        }
      );
      await dispatch(setApplication(data));
      dispatch(await me());
    } catch (err) {
      console.log(err);
    }
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function applicationReducer(application = initialState, action) {
  switch (action.type) {
    case SET_APPLICATION:
      return action.application;

    default:
      return application;
  }
}
