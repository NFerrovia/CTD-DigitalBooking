import { makeStyles } from "@material-ui/core";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 2 },
};

const Gallery = ({ accommodation: { images } }) => {
  const classes = useStyles();
  const imgs = images.map((img) => (
    // <div className={classes.imgWrapper}>
    <img
      className={classes.img}
      src={img.url}
      alt="Accommodation"
      draggable="false"
    />
    // </div>
  ));

  return (
    <div className={classes.gallery}>
      <AliceCarousel
        items={imgs}
        responsive={responsive}
        autoPlay
        autoPlayInterval={3000}
        infinite
        controlsStrategy="alternate"
        mouseTracking
        keyboardNavigation
      />
    </div>
  );
};

export default Gallery;

const useStyles = makeStyles(() => ({
  gallery: {
    padding: "10px 40px",
    "@media (max-width:1000px)": {
      padding: "10px",
    },
  },
  imgWrapper: {
    // margin: "0px 5px",
    // backgroundColor: "red",
    // width: "700px",
    // height: "375px",
    // color: "white",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // gap: "20px",
    // borderRadius: "10px",
    background: "rgb(2,0,36)",
    background:
      "linear-gradient(90deg, rgba(2,0,36,0.1) 0%, rgba(9,9,121,0.1) 1%, rgba(0,212,255,0.1) 99%)",
  },
  img: {
    height: "500px",
    width: "100%",
    objectFit: "cover",
    // objectFit: "contain",
    // // border: "2px solid black",
    // position: "relative",
    // top: "-20px",

    "@media (max-width:800px)": {
      height: "40vh",
    },
  },
}));
