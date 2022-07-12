import { makeStyles } from "@material-ui/core";
import React from "react";

const ErrorPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Page Not Found</h1>
    </div>
  );
};

export default ErrorPage;

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "85vh",
  },
}));
