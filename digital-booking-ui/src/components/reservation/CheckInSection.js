import React from "react";
import SectionWrapper from "./SectionWrapper";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Time } from "../../common/inputs/formInputs";
import { makeStyles } from "@material-ui/core";
import { useReservationStore } from "../../stores/reservation";

const CheckInSection = () => {
  const classes = useStyles();
  const setArrivalTime = useReservationStore((s) => s.setArrivalTime);
  const arrivalTime = useReservationStore((s) => s.arrivalTime);

  return (
    <SectionWrapper>
      <h2>Your arrival time</h2>
      <div className={classes.container}>
        <div className="text">
          <CheckCircleOutlineIcon />
          <p>Your room will be ready between 10.00 AM and 11.00 PM</p>
        </div>
        <Time
          className={classes.time}
          value={arrivalTime}
          onChange={setArrivalTime}
        />
      </div>
    </SectionWrapper>
  );
};

export default CheckInSection;

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.mixins.cardShadow,
    borderRadius: "5px",
    padding: "15px 30px",
    "& .text": {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      marginBottom: "15px",
    },
  },
  time: {
    width: "40%",
    "@media (max-width:930px)": {
      width: "60%",
    },
    "@media (max-width:500px)": {
      width: "100%",
    },
  },
}));
