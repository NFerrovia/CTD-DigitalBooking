import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { makeStyles } from "@material-ui/core";

const LocationDisplayer = ({ city }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <LocationOnIcon />
      <p>
        {city.name}, {city.name_country}.
      </p>
    </div>
  );
};

export default LocationDisplayer;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    margin: "15px 0",
    "& > p": {
      marginLeft: "8px",
    },
    "& > p > a ": {
      color: theme.palette.primary.main,
    },
  },
}));
