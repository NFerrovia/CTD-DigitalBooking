import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const ICONS = [FacebookIcon, LinkedInIcon, TwitterIcon, InstagramIcon];

const SocialIcons = () => {
  const classes = useStyles();

  return (
    <div className={classes.socialWrapper}>
      {ICONS.map((icon, index) => (
        <LinkIcon key={index} Icon={icon} className={classes.link} />
      ))}
    </div>
  );
};

const LinkIcon = ({ Icon, className }) => (
  <Link to="/" className={className}>
    <Icon />
  </Link>
);

export default SocialIcons;

const useStyles = makeStyles(() => ({
  socialWrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "10px",
  },
  link: {
    color: "inherit",
  },
}));
