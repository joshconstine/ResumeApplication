import React, { Component, Fragment } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import { useAuth } from "./contexts/authContext";
import ApplicationHome from "./components/Applications/ApplicationHome";
import CalendarHome from "./components/Calendar/CalendarHome.js";
import TemplatesHome from "./components/Templates/TemplatesHome";
import MeetTheCreator from "./components/Navbars/Footer/MeetTheCreator";
import About from "./components/Navbars/Footer/About";
import CreateApplication from "./components/Applications/CreateApplication";
import Goal from "./components/Applications/Goal";
import SingleApplication from "./components/Applications/SingleApplication";
import AddEvent from "./components/Events/AddEvent";
import EventsHome from "./components/Events/EventsHome";
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";
import Profile from "./components/User/Profile";
import { Container } from "@mui/material";
/**
 * COMPONENT
 */
const Routes = () => {
  const { currentUser } = useAuth();

  return (
    <Container sx={{ paddingTop: 12, paddingBottom: 40 }}>
      {currentUser ? (
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
          <Route path="/profile" component={Profile} />
          <Route path="/addEvent/:id" component={AddEvent} />
          <Route path="/application/:id" component={SingleApplication} />
          <Route path="/" component={Home} />

          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      )}
    </Container>
  );
};

export default Routes;
