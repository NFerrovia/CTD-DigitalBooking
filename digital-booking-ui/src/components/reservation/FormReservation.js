import { makeStyles } from "@material-ui/core";
import React from "react";
import { City, Email, Name, Surname } from "../../common/inputs/formInputs";
import { useReservationStore } from "../../stores/reservation";
import SectionWrapper from "./SectionWrapper";

const FormReservation = () => {
  const name = useReservationStore((s) => s.name);
  const surname = useReservationStore((s) => s.surname);
  const email = useReservationStore((s) => s.email);
  const city = useReservationStore((s) => s.city);
  const arriveTime = useReservationStore((s) => s.arriveTime);
  const setName = useReservationStore((s) => s.setName);
  const setSurname = useReservationStore((s) => s.setSurname);
  const setEmail = useReservationStore((s) => s.setEmail);
  const setCity = useReservationStore((s) => s.setCity);
  const setArriveTime = useReservationStore((s) => s.setArriveTime);

  const classes = useStyles();

  return (
    <SectionWrapper>
      <h2>Complete your data</h2>
      <div className={classes.form}>
        <div>
          <Name
            value={name}
            onChange={setName}
            className={classes.textField}
            disabled
          />
          <Surname
            value={surname}
            onChange={setSurname}
            className={classes.textField}
            disabled
          />
        </div>
        <div>
          <Email
            value={email}
            onChange={setEmail}
            className={classes.textField}
            disabled
          />
          <City value={city} onChange={setCity} className={classes.textField} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FormReservation;

const useStyles = makeStyles((theme) => ({
  form: {
    padding: "20px",
    borderRadius: "5px",
    display: "flex",
    ...theme.mixins.cardShadow,
    flexDirection: "column",
    "& > div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "@media (max-width:500px)": {
        flexDirection: "column",
      },
    },
  },
  textField: {
    width: "49%",
    marginTop: "10px",
    "@media (max-width:500px)": {
      width: "100%",
    },
  },
}));
