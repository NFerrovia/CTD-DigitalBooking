import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import User from "../common/Displayers/User";

const HeaderDrawer = ({ setOpen, userName, userSurname }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <IconButton
        className={classes.closeButton}
        onClick={() => setOpen(false)}
      >
        <CloseIcon />
      </IconButton>
      <div className={classes.titleWrapper}>
        {userName ? (
          <User name={userName} surname={userSurname} />
        ) : (
          <h2 className={classes.title}>MENU</h2>
        )}
      </div>
    </div>
  );
};

export default HeaderDrawer;

const useStyles = makeStyles((theme) => ({
  header: {
    height: "20%",
    backgroundColor: theme.palette.primary.main,
    position: "relative",
  },
  closeButton: {
    color: theme.palette.white,
  },
  titleWrapper: {
    color: theme.palette.white,
    position: "absolute",
    bottom: "5%",
    right: "5%",
  },
}));
