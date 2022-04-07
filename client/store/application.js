import axios from "axios";

const initialState = [];

// action type constants

const SET_APPLICATIONS = "SET_APPLICATIONS";
const CREATE_APPLICATION = "CREATE_APPLICATION";
const DELETE_APPLICATION = "DELETE_APPLICATION";

// action creators

export const createApplication = (application) => {
  return {
    type: CREATE_APPLICATION,
    application,
  };
};

export const deleteApplication = (application) => {
  return {
    type: DELETE_APPLICATION,
    application,
  };
};
export const setApplications = (applications) => {
  return {
    type: SET_APPLICATIONS,
    applications,
  };
};

// THUNK CREATORS

export const fetchApplications = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/applications");
      dispatch(setApplications(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCreateApplication = (application, history) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post(
        "/api/applications",
        application,
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      );
      dispatch(createApplication(created));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchDeleteApplication = (application, history) => {
  console.log("in fetch");
  return async (dispatch) => {
    const { data: created } = await axios.delete(
      `/api/applications/${application}`
    );
    dispatch(deleteApplication(created));
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function applicationsReducer(
  applications = initialState,
  action
) {
  switch (action.type) {
    case SET_APPLICATIONS:
      return action.applications;
    case CREATE_APPLICATION:
      return [...applications, action.application];

    case DELETE_APPLICATION:
      return applications.filter(
        (application) => application.id !== action.application.id
      );

    default:
      return applications;
  }
}
