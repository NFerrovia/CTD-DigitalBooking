import React from "react";
import { makeStyles } from "@material-ui/core";
import { SERVICES } from "../../models/business/servicesIcons";

export const ServicesSection = ({ services }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {services.map((service, index) => (
        <p key={index} className={classes.icon}>
          {SERVICES[service.name].icon}
        </p>
      ))}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
  },
  icon: {
    marginRight: "5px",
  },
}));
