import { makeStyles } from "@material-ui/core";
import React from "react";

const CenterContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Upps an Error Ocurred!</h1>
      <div>{children}</div>
    </div>
  );
};

export default CenterContainer;

const useStyles = makeStyles(() => ({
  container: {
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    "& :nth-child(2)": {
      "@media (max-width:1400px)": {
        // width: "40vw",
      },
    },
  },
}));
