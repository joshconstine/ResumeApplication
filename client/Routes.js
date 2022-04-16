import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import ApplicationHome from "./components/Applications/ApplicationHome";
import CalendarHome from "./components/Calendar/CalendarHome.js";
import TemplatesHome from "./components/Templates/TemplatesHome";
import MeetTheCreator from "./components/Navbars/Footer/MeetTheCreator";
import About from "./components/Navbars/Footer/About";
import CreateApplication from "./components/Applications/CreateApplication";
import Goal from "./components/Applications/Goal";
import SingleApplication from "./components/Applications/SingleApplication";
import EditApplication from "./components/Applications/EditApplication";
import AddEvent from "./components/Events/AddEvent";
import EventsHome from "./components/Events/EventsHome";
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/applications" component={ApplicationHome} />
            <Route path="/events" component={EventsHome} />
            <Route path="/templates" component={TemplatesHome} />
            <Route path="/calendar" component={CalendarHome} />
            <Route path="/about" component={About} />
            <Route path="/creator" component={MeetTheCreator} />
            <Route path="/createApplication" component={CreateApplication} />
            <Route path="/goal" component={Goal} />
            <Route path="/addEvent/:id" component={AddEvent} />
            <Route path="/application/:id" component={SingleApplication} />
            <Route path="/edit/application/:id" component={EditApplication} />

            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
