import { makeStyles } from "@material-ui/core";
import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <p>©2021 Digital Booking</p>
      <SocialIcons />
    </footer>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    height: "5vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px",
    color: theme.palette.white,
    "& > :nth-child(2)": {
      "@media (max-width:450px)": {
        visibility: "hidden",
      },
    },
  },
}));
