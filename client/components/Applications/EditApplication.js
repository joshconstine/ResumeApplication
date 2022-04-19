import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";

export const EditApplication = (props) => {
  const id = props.match.params.id;
  const { selectedApplication, updateSingleApplication } = useAuth();
  const applicaiton = selectedApplication;
  const history = useHistory();

  const [companyName, setCompanyName] = useState("");
  const [positionName, setPositionName] = useState("");
  const [positionDescription, setPositionDescription] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  const changes = () => {
    return {
      companyName,
      positionName,
      positionDescription,
      websiteUrl,
    };
  };

  useEffect(() => {
    setCompanyName(applicaiton.companyName);
    setPositionName(applicaiton.positionName);
    setPositionDescription(applicaiton.positionDescription);
    setWebsiteUrl(applicaiton.websiteUrl);
  }, [applicaiton]);

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

    history.push(`/applications`);
  };

  return (
    <div>
      <input
        type="text"
        value={companyName || ""}
        onChange={(event) => {
          setCompanyName(event.target.value);
        }}
      />
      <input
        type="text"
        value={positionName || ""}
        onChange={(event) => {
          setPositionName(event.target.value);
        }}
      />
      <input
        type="text"
        value={positionDescription || ""}
        onChange={(event) => {
          setPositionDescription(event.target.value);
        }}
      />
      <input
        type="text"
        value={websiteUrl || ""}
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

      <hr />
    </div>
  );
};

export default EditApplication;
