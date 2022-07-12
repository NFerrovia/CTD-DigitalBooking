import React from "react";
import { Button, Divider, makeStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import LocationDisplayer from "../../common/Displayers/LocationDisplayer";
import { useReservationStore } from "../../stores/reservation";
import { CATEGORIES } from "../../models/business/categories";

const ReservationDetail = ({ accommodation }) => {
  const classes = useStyles();
  const [startDate, endDate] = useReservationStore((s) => s.dateRange);

  const { images, category, name, city } = accommodation;

  return (
    <div className={classes.container}>
      <h2 className="title">Reserve's details</h2>
      <img className="img" src={images[0].url} alt="" />
      <p className="category">{CATEGORIES[category.title]}</p>
      <h3 className="name">{name}</h3>
      <Rating name="rating" size="small" />
      <LocationDisplayer city={city} />
      <div className="check-wrapper">
        <Divider />
        <div className="check">
          <p>Check In</p>
          <p>{startDate ? startDate.toLocaleDateString() : "- / - / -"}</p>
        </div>
        <Divider />
        <div className="check">
          <p>Check Out</p>
          <p>{endDate ? endDate.toLocaleDateString() : "- / - / -"}</p>
        </div>
        <Divider />
      </div>
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        type="submit"
      >
        Confirm reservation
      </Button>
    </div>
  );
};

export default ReservationDetail;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "30vw",
    ...theme.mixins.cardShadow,
    padding: "30px 20px",
    borderRadius: "5px",
    "& .img": {
      margin: "15px 0 30px 0",
      display: "block",

      minHeight: "360px",
      objectFit: "cover",
      flexShrink: 1,
    },
    "& .category": {
      color: theme.palette.text.hint,
      fontSize: "14px",
    },
    "& .name": {
      margin: "4px 0",
    },
    "& .check-wrapper": {
      margin: "15px 0 25px",
    },
    "& .check": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "25px 0px",
    },
    "@media (max-width:950px)": {
      order: 1,
      width: "100%",
    },
  },
  button: {
    marginTop: "20px",
    color: theme.palette.white,
    fontWeight: "bold",
  },
}));
