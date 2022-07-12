import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAuthStore } from "../../stores/auth";
import {
  removeAuthToken,
  removeRefreshToken,
  removeUser,
} from "../../utils/LocalStorage";

const User = ({ name, surname, navbar = false }) => {
  const classes = useUserStyles({ navbar });
  const fullName = `${name} ${surname}`;
  const alias = `${name.charAt(0)}${surname.charAt(0)}`;

  const logout = useAuthStore((s) => s.resetState);

  const handleLogout = () => {
    logout();
    removeAuthToken();
    removeRefreshToken();
    removeUser();
  };

  return (
    <div className={classes.userWrapper}>
      <Avatar alt={fullName}>{alias.toUpperCase()}</Avatar>
      <div>
        <p>
          Welcome, <br /> <span>{fullName}</span>
        </p>
      </div>
      {navbar && (
        <IconButton onClick={handleLogout}>
          <ExitToAppIcon fontSize="small" className={classes.logoutIcon} />
        </IconButton>
      )}
    </div>
  );
};

export default User;

const useUserStyles = makeStyles((theme) => ({
  userWrapper: {
    display: "flex",
    gap: "10px",
    fontWeight: "bold",
    "& span": {
      color: ({ navbar }) =>
        navbar ? theme.palette.primary.main : theme.palette.white,
    },
    "@media (max-width:800px)": {
      display: ({ navbar }) => (navbar ? "none" : ""),
    },
  },
  logoutIcon: {
    color: "red",
  },
}));
