import React from "react";
import { Link } from "react-router-dom";

import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
  const useStyles = makeStyles({
    root: {
      background: "#979D9C",
      borderRadius: 8,
      border: 0,
      color: "white",
      height: 35,
      padding: "0 30px",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#6c6e6e",
      },
    },
  });
  const classes = useStyles();

  return (
    <div className="page">
      <Link to="/selectdoctor">
        <ArrowBackSharpIcon className="arrow-btn" />
      </Link>

      <div key={doctor.id} className="doctor-card-wrapper">
        <h2 className="doctor-card-name">
          {doctor.name.title} {doctor.name.first} {doctor.name.last}
          <span className="doctor-card-id">({doctor.id})</span>
        </h2>

        <Avatar
          alt="{doctor.name.first}"
          src={doctor.picture.thumbnail}
          className="doctor-card-avatar"
        />

        <p>
          {doctor.qualification.short} | {doctor.qualification.experience} years
          experience
        </p>

        <p>
          {doctor.location.street}, {doctor.location.city}
        </p>

        <p>
          {doctor.phone} <span>{doctor.whatsapp}</span>{" "}
        </p>

        <p>Mail: {doctor.email}</p>

        <hr />

        <p>
          {doctor.name.title} {doctor.name.first} is available for a minimum of
          7 days for free follow up via text post Consultation. However, doctor
          can decide to increase the follow up text days as per case basis.
        </p>

        <hr />
        <div className="prev-appointments">
          <p>Appointment History</p>
          <p>{doctor.history.length} Prior Consultation</p>
        </div>
        <hr />
        <Link to="/appointmentcard" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            classes={{ root: classes.root }}
            disableElevation
          >
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
