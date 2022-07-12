import React from "react";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core";

const LikeAndShareSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <ShareIcon />
      <FavoriteIcon />
    </div>
  );
};

export default LikeAndShareSection;

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "10px 40px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    "& :nth-child(2)": {
      color: theme.palette.text.hint,
    },
    "@media (max-width:500px)": {
      padding: "10px",
    },
  },
}));
