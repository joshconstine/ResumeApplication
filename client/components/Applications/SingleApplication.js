import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  Button,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Typography,
  TextField,
  Collapse,
  IconButton,
} from "@mui/material";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const SingleApplication = (props) => {
  const history = useHistory();
  const {
    updateSelectedApplication,
    selectedApplication,
    deleteEvent,
    updateSingleApplication,
  } = useAuth();
  const [companyName, setCompanyName] = useState("");
  const [positionName, setPositionName] = useState("");
  const [positionDescription, setPositionDescription] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [expandedFourm, setExpandedfourm] = React.useState(false);
  const id = props.match.params.id;
  console.log(updateSelectedApplication(id));
  const appliedAt = selectedApplication.appliedAt?.slice(0, 10);
  console.log("applied at", appliedAt);

  const fourms = [
    { text: "Company", ref: companyName, set: setCompanyName },
    { text: "Position", ref: positionName, set: setPositionName },

    { text: "Website", ref: websiteUrl, set: setPositionDescription },
  ];

  const handleUpdate = () => {
    const updatedApplication = {
      uid: id,
      companyName: companyName,
      positionName: positionName,
      positionDescription: positionDescription,
      appliedAt: selectedApplication.appliedAt,
      websiteUrl: websiteUrl,
    };
    updateSingleApplication(updatedApplication, id);
  };

  useEffect(() => {
    setCompanyName(selectedApplication?.companyName || "");
    setPositionName(selectedApplication?.positionName || "");
    setPositionDescription(selectedApplication?.positionDescription || "");
    setWebsiteUrl(selectedApplication?.websiteUrl || "");
  }, [selectedApplication]);

  function handleSubmit() {
    history.push(`/addEvent/${id}`);
  }
  async function handleDelete(e, delid) {
    deleteEvent(id, delid);
  }
  function editClick() {
    history.push(`/edit/application/${id}`);
  }
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function renderEvents() {
    for (var event in selectedApplication.events) {
      var value = selectedApplication.events[event];
      return printEvent(value, event);
    }
  }
  function printEvent(event, value) {
    return (
      <Box>
        <Box>{event.eventName}</Box>
        <Box>{event.eventDate}</Box>
        <Button onClick={(e) => handleDelete(e, value)}> delete</Button>
      </Box>
    );
  }
  console.log(selectedApplication);
  return (
    <Card sx={{ width: "90%", margin: 5 }}>
      <CardHeader
        sx={{ backgroundColor: "#D3BBD2", width: "80%", margin: 2 }}
        title={selectedApplication.companyName}
        subheader={`Applied: ${appliedAt}`}
      />

      <CardContent>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {fourms.map((fourm, i) => {
            return (
              <Box key={i} sx={{ minWidth: 250, margin: 1 }}>
                <TextField
                  sx={{ paddingBottom: "2rem" }}
                  label={fourm.text}
                  type="text"
                  className="regFont"
                  value={fourm.ref}
                  color="secondary"
                  onChange={(event) => {
                    fourm.set(event.target.value);
                  }}
                  focused
                />
              </Box>
            );
          })}
        </Box>
        {renderEvents()}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <TextField
              sx={{ paddingBottom: "2rem" }}
              label="Description"
              type="text"
              className="regFont"
              value={positionDescription}
              color="secondary"
              onChange={(event) => {
                setPositionDescription(event.target.value);
              }}
              focused
              fullWidth
              multiline
            />
          </Box>
        </Collapse>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          variant="contained"
          id="changesButton"
          sx={{ backgroundColor: "#B363E6" }}
          className="styleButton"
          onClick={() => {
            handleUpdate();
          }}
          disableElevation
        >
          Save changes
        </Button>
        {/* <Button onClick={handleDelete}>delete</Button> */}
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#B363E6" }}
          className="styleButton"
          onClick={handleSubmit}
          disableElevation
        >
          Add Event
        </Button>{" "}
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#B363E6" }}
          className="styleButton"
          disableElevation
        >
          View Documents
        </Button>{" "}
        <ExpandMore
          expand={expandedFourm}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
};

export default SingleApplication;
