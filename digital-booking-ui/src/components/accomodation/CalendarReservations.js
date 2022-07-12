import React, { useState, useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { useCurrentWidth } from "../../hooks/useRezise";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/auth";
import { useLoginStore } from "../../stores/login";

registerLocale("es", es);

const CalendarReservations = ({ bookings }) => {
  const classes = useStyles();
  const calendarClasses = useCalendarStyles();
  const navigate = useNavigate();
  const widthScreen = useCurrentWidth();
  const auth = useAuthStore((s) => s.name);
  const setNeedAuth = useLoginStore((s) => s.setNeedAuth);
  const today = new Date();

  const reservatedDates =
    !!bookings.length &&
    bookings.map((booking) => ({
      start: Date.parse(booking.startDate),
      end: Date.parse(booking.endDate),
    }));

  const handleReservation = () => {
    if (auth) {
      navigate(`reservation`);
      return;
    }
    setNeedAuth();
    navigate("/login");
  };

  return (
    <section className={classes.section}>
      <h2>Available dates</h2>
      <div className={classes.container}>
        <DatePicker
          className={calendarClasses.calendar}
          locale="es"
          monthsShown={widthScreen > 620 ? 2 : 1}
          minDate={today}
          inline
          disabledKeyboardNavigation
          excludeDateIntervals={reservatedDates}
        />
        <div className={classes.reservation}>
          <h4>Add your travel dates to get the best prices</h4>
          <Button
            color="primary"
            variant="contained"
            onClick={handleReservation}
          >
            Start Reservation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CalendarReservations;

const useStyles = makeStyles((theme) => ({
  section: {
    width: "100%",
    backgroundColor: theme.palette.secondary.light,
    padding: "15px 40px",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "15px 0",
    "& .react-datepicker__month-container": {
      width: "30vw",
      "& .react-datepicker__month": {
        height: "200px",
      },
    },
    //1000px
    "@media (max-width:1000px)": {
      flexDirection: "column",
      "& .react-datepicker__month-container": {
        width: "40vw",
      },
    },
    //620px
    "@media (max-width:620px)": {
      "& .react-datepicker__month-container": {
        width: "80vw",
      },
    },
  },
  reservation: {
    backgroundColor: theme.palette.white,
    ...theme.mixins.cardShadow,
    borderRadius: "10px",
    padding: "15px 20px",
    width: "30%",
    "& > h4": {
      marginBottom: "20px",
    },
    "& > button": {
      width: "100%",
      color: theme.palette.white,
      fontWeight: "bold",
    },
    //1000px
    "@media (max-width:1000px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: "20px",
      width: "90%",
      "& > h4": {
        marginBottom: "0",
      },
      "& > button": {
        width: "auto",
      },
    },
    //620px
    "@media (max-width:620px)": {
      flexDirection: "column",
      textAlign: "center",
      gap: "20px",
    },
  },
}));

const useCalendarStyles = makeStyles((theme) => ({
  //   wrapper: {
  //     // width: "1000%",
  //     border: "2px solid red",
  //     width: "50%",
  //     "& > div": {
  //       width: "100%",
  //     },
  //     "@media (max-width:500px)": {
  //       width: "100%",
  //       "& .react-datepicker": {
  //         display: "flex",
  //         flexDirection: "column",
  //         width: "95vw",
  //       },
  //     },
  //     "& .react-datepicker": {
  //       width: "100%",
  //     },
  //     "& .react-datepicker__triangle": {
  //       // "&::after": {
  //       //   borderBottomColor: `8px solid red`,
  //       // },
  //     },
  //     "& .react-datepicker__header": {
  //       backgroundColor: theme.palette.primary.main,
  //     },
  //     "& .react-datepicker__current-month": {
  //       color: theme.palette.white,
  //     },
  //     "& .react-datepicker__day-name": {
  //       color: theme.palette.white,
  //     },
  //     "& .react-datepicker__navigation": {
  //       // backgroundColor: theme.palette.primary.main,
  //       borderRadius: "100%",
  //       "&:hover": {
  //         transform: "scale(1.1)",
  //       },
  //     },
  //   },

  calendar: {
    // height: "56px",
    // width: "100%",
    // padding: "10px",
    // borderRadius: "5px",
    // position: "relative",
    // border: "none",
  },
  //   icon: {
  //     position: "absolute",
  //     left: 0,
  //   },
}));
