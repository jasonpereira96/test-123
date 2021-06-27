import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import "./Home.css";

const Home = () => {
  const useStyles = makeStyles({
    root: {
      background: "#F28F3B",
      fontSize: 18,
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "5px 5px 10px #808080",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#f07b14",
      },
    },

    label: {
      textTransform: "capitalize",
    },
  });
  const classes = useStyles();
  return (
    <div className="splash-card">
      <h1>Manage your Veterinary practice with comfort!</h1>
      <p>
        A cloud-based management platform for veterinary professionals to manage
        their daily tasks efficiently
      </p>

      <Link to="/selectpatient" className="link">
        <Button classes={{ root: classes.root, label: classes.label }}>
          Get Started!
        </Button>
      </Link>
    </div>
  );
};

export default Home;
