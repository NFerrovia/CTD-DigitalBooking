import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core";
import HeaderDrawer from "./HeaderDrawer";
import BodyDrawer from "./BodyDrawer";
import FooterDrawer from "./FooterDrawer";

const DrawerPanel = ({ open, setOpen, ...rest }) => {
  const classes = useStyles();
  return (
    <Drawer anchor="right" open={open} classes={{ paper: classes.root }}>
      <HeaderDrawer setOpen={setOpen} {...rest} />
      <BodyDrawer setOpen={setOpen} />
      <FooterDrawer />
    </Drawer>
  );
};

export default DrawerPanel;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
  },
}));
