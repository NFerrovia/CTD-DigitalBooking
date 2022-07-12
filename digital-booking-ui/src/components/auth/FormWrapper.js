import { makeStyles } from "@material-ui/core";
import React from "react";

const FormWrapper = ({ children }) => {
  const classes = useStyles();
  return <section className={classes.formWrapper}>{children}</section>;
};

const useStyles = makeStyles(() => ({
  formWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100vw",
    height: "85vh",
  },
}));

export default FormWrapper;
