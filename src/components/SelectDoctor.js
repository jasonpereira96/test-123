import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import Form from "./Form";
import { withStyles } from "@material-ui/core/styles";
import { Avatar, Button } from "@material-ui/core";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import StarIcon from "@material-ui/icons/Star";
import PhoneIcon from "@material-ui/icons/Phone";

import "./SelectDoctor.css";

const SelectDoctor = ({ DOCTOR_API, setDoctor }) => {
  const [city, setCity] = useState("All");
  const [query, setQuery] = useState("");

  //Next page

  let history = useHistory();

  function handleClick(id) {
    setDoctor(id);
    history.push("/doctorcard");
  }

  //Button

  const CtaButton = withStyles(() => ({
    root: {
      width: 110,
      height: 30,
      margin: "3px 0",
      color: "",
      backgroundColor: "",
      padding: 0,
      "&:hover": {
        backgroundColor: "",
      },
    },
    label: {
      fontSize: 10,
      textTransform: "none",
    },
  }))(Button);

  //Filter city on select

  let filteredRecords = [...DOCTOR_API.results]

  // if a city is selected, then filter by city
  if (city !== "All") {
    filteredRecords = filteredRecords.filter(doctor => doctor.location.city === city)
  }
  filteredRecords = filteredRecords.filter((doctor) => {
    return Object.values(doctor.name)
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase());
  });

  return (
    <div className="page">
      <Link to="/selectpatient">
        <ArrowBackSharpIcon className="arrow-btn" />
      </Link>

      <h2 className="search-heading">Find and Book</h2>

      <Form city={city} setCity={setCity} setQuery={setQuery} />

      <hr />

      {filteredRecords.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <div className="doctor-img">
            <Avatar
              alt="{doctor.name.first}"
              src={doctor.picture.thumbnail}
              style={{ height: "60px", width: "60px" }}
              className="doctor-avatar"
            />
          </div>
          <div className="doctor-text">
            <div className="doctor-name">
              <h3>
                {doctor.name.title} {doctor.name.first} {doctor.name.last}
              </h3>
              {doctor.starred ? (
                <StarIcon
                  style={{ fontSize: 14, margin: "0 10px" }}
                  className="starred"
                />
              ) : (
                ""
              )}
            </div>
            <p>
              {doctor.qualification.degree} ({doctor.qualification.short})
            </p>
            <p>{doctor.qualification.experience} years experience</p>
            <p>
              {doctor.location.street}, {doctor.location.city}
            </p>
            <div className="doctor-feedback">
              {doctor.likes} {doctor.stories} Patient Stories
            </div>
          </div>
          <div className="doctor-cta">
            <p
              className={`doctor-status doctor-${
                doctor.available ? "available" : "unavailable"
              }`}
            >
              {doctor.available ? "Available Today" : "Unavailable Today"}
            </p>

            <CtaButton
              variant="outlined"
              onClick={() => handleClick(doctor)}
              disabled={!doctor.available}
            >
              Book an appointment
            </CtaButton>

            <CtaButton variant="outlined">
              <PhoneIcon style={{ fontSize: 10, margin: "0 5px" }} />
              Call clinic
            </CtaButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectDoctor;
