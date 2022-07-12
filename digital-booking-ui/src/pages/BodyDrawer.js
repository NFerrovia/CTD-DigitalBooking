import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth";
import {
  removeAuthToken,
  removeRefreshToken,
  removeUser,
} from "../utils/LocalStorage";

const LINKS = [
  { text: "Log In", link: "/login" },
  { text: "Sign Up", link: "/signup" },
];

const BodyDrawer = ({ setOpen }) => {
  const classes = useStyles();

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const userName = useAuthStore((s) => s.name);
  const resetState = useAuthStore((s) => s.resetState);
  const isAdmin = useAuthStore((s) => s.isAdmin);

  const handleLogout = () => {
    resetState();
    setOpen(false);
    removeAuthToken();
    removeRefreshToken();
    removeUser();
  };

  const handleLink = (pathname) => {
    setOpen(false);
    navigate(pathname);
  };

  return (
    <>
      <div className={classes.body}>
        <List>
          {!userName &&
            LINKS.map((anchor) => {
              if (pathname === anchor.link) return;
              return (
                <div key={anchor.text} onClick={() => handleLink(anchor.link)}>
                  <ListItem button>
                    <ListItemIcon>
                      <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText>{anchor.text}</ListItemText>
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
          {isAdmin() && (
            <div onClick={() => handleLink("/administration")}>
              <ListItem button>
                <ListItemIcon>
                  <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText>Administration</ListItemText>
              </ListItem>
              <Divider />
            </div>
          )}
          {userName && (
            <div onClick={() => handleLink("/reservations")}>
              <ListItem button>
                <ListItemIcon>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText>Reservations</ListItemText>
              </ListItem>
              <Divider />
            </div>
          )}
        </List>
      </div>
      <Logout
        className={classes.logout}
        user={userName}
        onClick={handleLogout}
      />
    </>
  );
};

export default BodyDrawer;

const Logout = ({ user, onClick, className }) =>
  user && (
    <div className={className}>
      <p>
        Do you want to <span onClick={onClick}>Log Out</span>?
      </p>
      <Divider />
    </div>
  );

const useStyles = makeStyles((theme) => ({
  body: {
    flexGrow: 1,
  },
  link: {
    color: theme.palette.secondary.dark,
  },
  logout: {
    textAlign: "right",
    marginRight: "10px",
    "& > p": {
      marginBottom: "10px",
      fontSize: "12px",
    },
    "&  span": {
      color: theme.palette.primary.main,
    },
  },
}));
