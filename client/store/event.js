import axios from "axios";
import { me } from "./auth";

const initialState = [];

// action type constants

const SET_EVENTS = "SET_EVENTS";
const CREATE_EVENT = "CREATE_EVENT";
const DELETE_EVENT = "DELETE_EVENT";

// action creators

export const createEvent = (event) => {
  return {
    type: CREATE_EVENT,
    event,
  };
};

export const deleteEvent = (event) => {
  return {
    type: DELETE_EVENT,
    event,
  };
};
export const setEvent = (events) => {
  return {
    type: SET_EVENTS,
    events,
  };
};

// THUNK CREATORS

export const fetchEvents = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/events", {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      dispatch(setEvents(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCreateEvent = (event, history) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post("/api/events", event, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      //addevent route **************************
      //   const { message } = await axios.post("/api/sms/event", event);
      dispatch(await createEvent(created));
      dispatch(await me());
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchDeleteEvent = (event, history) => {
  console.log("in fetch");
  return async (dispatch) => {
    const { data: created } = await axios.delete(`/api/events/${event}`, {
      headers: {
        Authorization: window.localStorage.getItem("token"),
      },
    });
    dispatch(await deleteEvent(created));
    dispatch(await me());
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function eventsReducer(events = initialState, action) {
  switch (action.type) {
    case SET_EVENTS:
      return action.events;
    case CREATE_EVENT:
      return [...events, action.event];

    case DELETE_EVENT:
      return events.filter((event) => event.id !== action.event.id);

    default:
      return events;
  }
}
