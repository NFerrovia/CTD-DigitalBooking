import React from "react";
import { Divider, makeStyles } from "@material-ui/core";
import { ServiceDisplayer } from "../../common/Displayers/ServiceDisplayer";

const ServicesSection = ({ accommodation: { features } }) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <h2>Services</h2>
      <Divider className={classes.divider} />
      <div className={classes.wrapper}>
        {features &&
          features.map(
            (feature) =>
              feature && (
                <ServiceDisplayer key={feature.id} service={feature.name} />
              )
          )}
      </div>
    </section>
  );
};

export default ServicesSection;

const useStyles = makeStyles((theme) => ({
  section: {
    width: "100%",
    padding: "20px 0",
    "& > h2": {
      padding: "0 40px",
    },
  },
  divider: {
    margin: "10px",
    backgroundColor: theme.palette.primary.main,
  },
  wrapper: {
    marginTop: "20px",
    padding: "0px 40px",
    display: "flex",
    justifyContent: "start",
    alignItems: " center",
    flexWrap: "wrap",
    gap: "15px",
  },
}));
