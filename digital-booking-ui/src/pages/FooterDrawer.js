import React from "react";
import { makeStyles } from "@material-ui/core";
import SocialIcons from "./SocialIcons";

const FooterDrawer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <SocialIcons />
    </div>
  );
};

export default FooterDrawer;

const useStyles = makeStyles((theme) => ({
  footer: {
    height: "5%",
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "5px",
  },
}));
