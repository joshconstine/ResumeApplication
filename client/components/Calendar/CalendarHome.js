import React from "react";
import { Box, Button, Typography } from "@mui/material";

/**
 * COMPONENT
 */
export const CalendarHome = (props) => {
  return (
    <div>
      <div id="calendar"></div>;
      {/* <FullCalendar initialView="dayGridMonth" /> */}
      <Typography sx={{ width: "49%", fontFamily: "Fantasy" }} variant="h3">
        Calendar Feature comming soon!
      </Typography>
    </div>
  );
};

/**
 * CONTAINER
 */

export default CalendarHome;
