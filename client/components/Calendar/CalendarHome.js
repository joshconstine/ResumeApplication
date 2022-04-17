import React from "react";
import { connect } from "react-redux";
import { Box, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
/**
 * COMPONENT
 */
export const CalendarHome = (props) => {
  const { username } = props;
  const history = useHistory();

  return (
    <div>
      <div id="calendar"></div>;
      {/* <FullCalendar initialView="dayGridMonth" /> */}
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(CalendarHome);
