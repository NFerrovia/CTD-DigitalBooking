import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import ProductCard from "../../common/Displayers/ProductCard";
import { useAuthStore } from "../../stores/auth";
import { useBookingStore } from "../../stores/bookings";
import { useProductsStore } from "../../stores/products";
import { isEmptyArray } from "../../utils/validations";

export const Reservations = () => {
  const classes = useStyles();
  const doFetchBookings = useBookingStore((s) => s.doFetchBookings);
  const bookings = useBookingStore((s) => s.data);
  const userId = useAuthStore((s) => s.id);

  useEffect(() => {
    doFetchBookings(userId);
  }, [userId]);

  return (
    <section className={classes.section}>
      <h2>Reservations</h2>

      <div className={classes.container}>
        {isEmptyArray(bookings) && <h1>No data found</h1>}
        {bookings.map((booking) => {
          const product = booking.product;
          return (
            <div key={product.id}>
              <p className="check-in">
                Check in: {booking.startDate} at {booking.hour}
              </p>
              <p className="check-out">Check out: {booking.endDate}</p>
              <ProductCard
                {...product}
                isReservation
                image={product.images[0].url}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "10px 40px",
    marginTop: "15px",
    "& > h2": {
      marginBottom: "15px",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
    "& .check-in, .check-out": {
      fontWeight: "bold",
      margin: "10px 0",
    },
  },
}));
