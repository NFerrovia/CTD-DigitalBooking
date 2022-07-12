import React from "react";
import { makeStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

//
//ADD RATING MUI
//

const PunctuationDisplayerWithStars = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.review}>
        <p>Very Good</p>
        <div className="stars">
          <Rating name="rating" size="small" />
        </div>
      </div>
      <div className={classes.punctuation}>8</div>
    </div>
  );
};

export default PunctuationDisplayerWithStars;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  review: {
    textAlign: "right",
  },
  punctuation: {
    fontSize: "30px",
    fontWeight: "bold",
    color: theme.palette.white,
    backgroundColor: theme.palette.secondary.main,
    padding: "4px 12px",
    borderRadius: "5px",
  },
}));
