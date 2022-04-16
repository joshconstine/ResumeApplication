import React, { useState, useEffect } from "react";
import {
  fetchApplication,
  updateSingleApplication,
} from "../../store/singleApplication";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  fetchApplications,
  fetchDeleteApplication,
} from "../../store/application";
import { me } from "../../store/auth";

export const EditApplication = (props) => {
  const id = props.match.params.id;

  const applicaiton = useSelector((state) => state.selectedApplication);
  const dispatch = useDispatch();
  const history = useHistory();

  const [companyName, setCompanyName] = useState();
  const [positionName, setPositionName] = useState();
  const [positionDescription, setPositionDescription] = useState();
  const [websiteUrl, setWebsiteUrl] = useState();

  const changes = () => {
    return {
      companyName,
      positionName,
      positionDescription,
      websiteUrl,
    };
  };

  useEffect(() => {
    dispatch(fetchApplication(id));
  }, []);

  useEffect(() => {
    setCompanyName(applicaiton.companyName);
    setPositionName(applicaiton.positionName);
    setPositionDescription(applicaiton.positionDescription);
    setWebsiteUrl(applicaiton.websiteUrl);
  }, [applicaiton]);

  const handleUpdate = () => {
    const updatedApplication = {
      id,
      changes: changes(),
    };
    dispatch(updateSingleApplication(updatedApplication, id)).then(() => {});
    dispatch(fetchApplications());
  };

  //   const handleDelete = async () => {
  //     await dispatch(fetchDeleteApplication(id));
  //   };

  return (
    <div>
      <input
        type="text"
        value={companyName}
        onChange={(event) => {
          setCompanyName(event.target.value);
        }}
      />
      <input
        type="text"
        value={positionName}
        onChange={(event) => {
          setPositionName(event.target.value);
        }}
      />
      <input
        type="text"
        value={positionDescription}
        onChange={(event) => {
          setPositionDescription(event.target.value);
        }}
      />
      <input
        type="text"
        value={websiteUrl}
        onChange={(event) => {
          setWebsiteUrl(event.target.value);
        }}
      />
      <button
        onClick={() => {
          handleUpdate();
        }}
      >
        Submit Changes
      </button>
      {/* <button
        onClick={() => {
          handleDelete();
        }}
      >
        Delete Buddy
      </button> */}
      <hr />
    </div>
  );
};

export default EditApplication;
