import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import HeaderAccommodation from "../../components/accomodation/HeaderAccommodation";
import Rules from "../../components/accomodation/Rules";
import Calendar from "../../components/reservation/Calendar";
import CheckInSection from "../../components/reservation/CheckInSection";
import FormReservation from "../../components/reservation/FormReservation";
import ReservationDetail from "../../components/reservation/ReservationDetail";
import { useAuthStore } from "../../stores/auth";
import { useReservationStore } from "../../stores/reservation";
import { useAccommodationStore } from "../../stores/accommodation";
import Swal from "sweetalert2";
import { isEmptyObject } from "../../utils/validations";

const Reservation = () => {
  const classes = useStyles();
  const { id } = useParams();

  const authValues = useAuthStore((s) => s.getValues());
  const authId = useAuthStore((s) => s.id);
  const navigate = useNavigate();

  const accommodation = useAccommodationStore((s) => s.data);
  const fetchData = useAccommodationStore((s) => s.fetchData);

  const setDefaultValues = useReservationStore((s) => s.setDefaultValues);
  const setError = useReservationStore((s) => s.setError);
  const errorDates = useReservationStore((s) => s.getErrorDates());
  const dateRange = useReservationStore((s) => s.dateRange);
  const setProductId = useReservationStore((s) => s.setProductId);
  const doReservation = useReservationStore((s) => s.doReservation);

  useEffect(() => {
    setDefaultValues(authValues);
    fetchData(id);
  }, []);

  const getFormValues = useReservationStore((s) => s.getFormValues);

  const handleSubmitReservation = async (e) => {
    setProductId(accommodation.id);
    setError("");
    e.preventDefault();
    if (errorDates) {
      setError("You must choose the Check In and Check Out dates");
      return;
    }

    const response = await doReservation(authId);

    if (response?.id) {
      Swal.fire({
        title: "The reservation has been made successfully",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/");
      });
      return;
    } else {
      Swal.fire({
        title: "An error ocurred while booking",
        text: response.error_message,
        icon: "error",
        confirmButtonColor: "#3085d5",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      {isEmptyObject(accommodation) ? (
        <h1>Loading..</h1>
      ) : (
        <>
          <HeaderAccommodation accommodation={accommodation} />
          <form
            className={classes.container}
            onSubmit={handleSubmitReservation}
          >
            <div className="left-side">
              <FormReservation />
              <Calendar bookings={accommodation.bookings} />
              <CheckInSection />
            </div>
            <ReservationDetail accommodation={accommodation} />
          </form>
          <Rules policies={accommodation.policies} />
        </>
      )}
    </>
  );
};

export default Reservation;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    gap: "30px",
    padding: "40px 40px",
    "& > :nth-child(1)": {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      "@media (max-width:950px)": {
        order: 2,
      },
    },
    "@media (max-width:950px)": {
      padding: "30px 10px",
      flexDirection: "column",
    },
  },
}));
