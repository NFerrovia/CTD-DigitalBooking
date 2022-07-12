import React from "react";
import { SERVICES } from "../../models/business/servicesIcons";
import { makeStyles } from "@material-ui/core";

export const ServiceDisplayer = ({ service, showName = true }) => {
  const classes = useStyles({ showName });

  return (
    <div className={classes.wrapper}>
      {SERVICES[service].icon}
      {showName && <p>{SERVICES[service].text}</p>}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "24%",
    "& :nth-child(1)": {
      color: theme.palette.primary.main,
    },
    "@media (max-width:1200px)": {
      width: "30%",
    },
    "@media (max-width:600px)": {
      width: "45%",
    },
  },
}));
