import React from "react";
import { makeStyles } from "@material-ui/core";

const DescriptionSection = ({ accommodation }) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <h2>Luxury stay in Gardone Riviera</h2>
      <p>{accommodation.description}</p>
    </section>
  );
};

export default DescriptionSection;

const useStyles = makeStyles(() => ({
  section: {
    padding: "10px 40px",
    "& > p": {
      marginTop: "15px",
      whiteSpace: "pre-line",
    },
  },
}));
