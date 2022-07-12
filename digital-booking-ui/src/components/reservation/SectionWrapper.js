import { makeStyles } from "@material-ui/core";
import React from "react";

const SectionWrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default SectionWrapper;

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: "30px",
    "& > h2": {
      marginBottom: "15px",
    },
    "& > h3": {
      marginBottom: "15px",
    },
    "@media (max-width:930px)": {
      padding: "15px 0",
    },
  },
}));
