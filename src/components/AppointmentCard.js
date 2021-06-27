import React from "react";
import { Link } from "react-router-dom";

import DateFnsUtils from "@date-io/date-fns";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import "./AppointmentCard.css";

const AppointmentCard = ({
  pet,
  checked,
  setChecked,
  selectedDate,
  setSelectedDate,
}) => {
  const useStyles = makeStyles({
    root: {
      background: "#979D9C",
      borderRadius: 8,
      border: 0,
      margin: "20px auto",
      color: "white",
      padding: "5px 50px",
      transition: "all 0.3s ease",
      fontSize: 11,
      "&:hover": {
        backgroundColor: "#6c6e6e",
      },
    },

    label: {
      textTransform: "capitalize",
    },
  });

  const classes = useStyles();

  function WhatsappCheckbox() {
    return (
      <>
        <FormControlLabel
          control={
            <Checkbox
              className="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              color="default"
            />
          }
          label={
            <p className="whatsapp-checkbox">
              Receive status message on{" "}
              <WhatsAppIcon style={{ fontSize: "10px", color: "#6c6e6e" }} />
              WhatsApp
            </p>
          }
        />
      </>
    );
  }

  //set date time
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="page">
      <Link to="/doctorcard">
        <ArrowBackSharpIcon className="arrow-btn" />
      </Link>
      <div className="appointment-card">
        <h2>Appointment Details</h2>

        <div key={pet.id} className="app-pet-card">
          <div className="app-pet-img">
            <Avatar
              alt="{pet.name}"
              src={pet.picture}
              className="app-pet-avatar"
            />
          </div>
          <div className="app-pet-text">
            <p>
              {pet.name} ({pet.animal})
            </p>
            <p className="pet-id">{pet.id}</p>
          </div>
        </div>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disablePast="true"
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField multiline rows={3} variant="outlined" />

        <hr />
        <p className="terms-conditions">
          By proceeding, I agree that I have read and understood the Terms &#38;
          Conditions of usage of 247 and consent to the same. I am voluntarily
          availing of the services provided on this platform. I am fully aware
          that I will not be undergoing a physical examination by a physician
          prior to a physician recommending medical tests and/ or treatment
          and/or the prescribing of OTC drugs. I am also aware that the
          consultation on 247 Application does not preclude my rights to visit a
          physician and opt for a physical examination at any point in time and
          I am free at any time during the consultation to request for the same.
        </p>

        <WhatsappCheckbox />

        <div className="cta">
          <Link to="/checkout" className="link">
            <Button classes={{ root: classes.root, label: classes.label }}>
              Proceed
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
