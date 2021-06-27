import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Avatar, Box } from "@material-ui/core";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import "./SelectPatient.css";

const SelectPatient = ({ PET_API, setPet }) => {
  let history = useHistory();

  const handleClick = function (pet) {
    setPet(pet);

    history.push("/selectdoctor");
  };

  return (
    <div className="page">
      <Link to="/">
        <ArrowBackSharpIcon
          style={{
            color: "black",
            fontSize: 30,
            transform: "translate(10px,10px)",
          }}
        />
      </Link>
      {/* <Box className="pet-list" onClick={handleClick}> */}
      <Box className="pet-list">
        <h2>Who is the patient?</h2>
        {PET_API.results.map((pet) => (
          // <div key={pet.id} className="pet-card">
          <div
            key={pet.id}
            className="pet-card"
            onClick={() => handleClick(pet)}
          >
            <div className="pet-img">
              <Avatar
                alt="{pet.name}"
                src={pet.picture}
                className="pet-avatar"
              />
            </div>
            <div className="pet-text">
              <p>
                {pet.name} ({pet.animal})
              </p>
              <p className="pet-id">{pet.id}</p>
            </div>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default SelectPatient;
