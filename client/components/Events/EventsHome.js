import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
/**
 * COMPONENT
 */
export const EventsHome = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "space-center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ width: "49%", fontFamily: "Fantasy" }} variant="h3">
            Events{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

/**
 * CONTAINER
 */

export default EventsHome;
