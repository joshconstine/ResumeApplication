import React from "react";
import { connect } from "react-redux";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import { useHistory } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EventIcon from "@mui/icons-material/Event";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { useAuth } from "../contexts/authContext";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const history = useHistory();
  const { userInfo } = useAuth();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 1,
      }}
    >
      <Box
        className="column"
        sx={{
          alignSelf: "flex-start",
          paddingLeft: "5%",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="p" className="header">
          Hello!
        </Typography>
        <Typography variant="p" sx={{ fontSize: 15, marginTop: 1 }}>
          Lets help you find your dream job!
        </Typography>
      </Box>

      <Box
        sx={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 3,
          padding: 5,
          backgroundColor: "#F5F5F5",
        }}
      >
        <Card
          className=" card homeScreenOption"
          onClick={() => history.push("/applications")}
        >
          <CardHeader
            avatar={<ArticleIcon />}
            sx={{
              backgroundColor: "#D3BBD2",
              width: "80%",
              margin: 2,
              marginBottom: 0,
            }}
            title="Applications"
          />
          <CardContent>
            <Typography variant="p" sx={{ fontSize: 14 }}>
              Add applications to our systen and we will help you track your
              progress towards your dream job.
            </Typography>
          </CardContent>
        </Card>
        <Card
          className=" card homeScreenOption"
          onClick={() => history.push("/calendar")}
        >
          <CardHeader
            avatar={<DateRangeIcon />}
            title="Calendar"
            sx={{
              backgroundColor: "#D3BBD2",

              width: "80%",
              margin: 2,
              marginBottom: 0,
            }}
          />
          <CardContent>
            <Typography variant="p" sx={{ fontSize: 14 }}>
              Our callander will help show your progress and stay consistant.
            </Typography>
          </CardContent>
        </Card>
        <Card
          className=" card homeScreenOption"
          onClick={() => history.push("/events")}
        >
          <CardHeader
            title="Events"
            avatar={<EventIcon />}
            sx={{
              backgroundColor: "#D3BBD2",

              width: "80%",
              margin: 2,
              marginBottom: 0,
            }}
          />
          <CardContent>
            <Typography variant="p" sx={{ fontSize: 14 }}>
              Never miss another event with our handy event reminders and
              tracking system.
            </Typography>
          </CardContent>
        </Card>
        <Card
          className=" card homeScreenOption"
          onClick={() => history.push("/templates")}
        >
          <CardHeader
            title="Templates"
            avatar={<PostAddIcon />}
            sx={{
              backgroundColor: "#D3BBD2",

              width: "80%",
              margin: 2,
              marginBottom: 0,
            }}
          />
          <CardContent>
            <Typography variant="p" sx={{ fontSize: 14 }}>
              Manage your templates for resumes, cover letters, emails, and
              more.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
