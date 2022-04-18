import React from "react";
import { connect } from "react-redux";
import { Box, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
/**
 * COMPONENT
 */
export const CalendarHome = (props) => {
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

export default CalendarHome;
