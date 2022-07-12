import { makeStyles } from "@material-ui/core";
import React from "react";

export const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Loading...</h1>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "85vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& h1": {
      color: theme.palette.primary.main,
    },
  },
}));
