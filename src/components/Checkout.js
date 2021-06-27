import React from "react";
import { Link } from "react-router-dom";

import moment from "moment";
import { Avatar } from "@material-ui/core";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";
import "./Checkout.css";

const Checkout = ({ doctor, pet, selectedDate }) => {
  moment.updateLocale("en-in", {
    longDateFormat: {
      LLLL: "dddd, D MMMM YYYY, hh:mm a",
    },
  });

  return (
    <div className="page">
      <Link to="/appointmentcard">
        <ArrowBackSharpIcon className="arrow-btn" />
      </Link>
      <div className="checkout-card">
        <div className="checkout-head">
          <div className="checkout-name">
            <h2>
              {doctor.name.title} {doctor.name.first} {doctor.name.last}
            </h2>
            <p className="checkout-doc-id">({doctor.id})</p>
            <p className="checkout-pet">
              <b>
                {pet.name} ({pet.id})
              </b>
            </p>
          </div>
          <div className="checkout-img">
            <Avatar
              alt="{doctor.name.first}"
              src={doctor.picture.thumbnail}
              className="checkout-avatar"
              style={{ height: "85px", width: "85px" }}
            />
          </div>
        </div>
        <div className="checkout-details">
          <p>Follow up</p>
          <p className="checkout-date">{moment(selectedDate).format("LLLL")}</p>
          <hr />
          <div className="checkout-total">
            <p>Amount to pay</p>
            <p>Rs 700/-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
