import React from "react";
import { Divider, makeStyles } from "@material-ui/core";

const ruleNames = {
  "Health and security policy": [],
  "Rules and Policy": [],
  "Cancelation policy": [],
};

const Rules = ({ policies }) => {
  const classes = useStyles();

  const orderPolicies = policies.reduce(
    (acc, policy) => {
      const policyTitle = policy.typeOfPolicy.description;
      return {
        ...acc,
        [policyTitle]: [...acc[policyTitle], policy.description],
      };
    },
    {
      ...ruleNames,
    }
  );

  return (
    <section className={classes.section}>
      <h2>What do you have to know</h2>
      <Divider className={classes.divider} />
      <div className={classes.wrapper}>
        {orderPolicies &&
          Object.entries(orderPolicies).map(([ruleType, rules], i) => (
            <div className={classes.ruleContainer} key={i}>
              <h4>{ruleType}</h4>
              {rules.map((rule, index) => (
                <p key={index}>{rule}</p>
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Rules;

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
    justifyContent: "space-between",
    alignItems: "start",
    flexWrap: "wrap",
    gap: "15px",
  },
  ruleContainer: {
    width: "32%",
    "& > h4": {
      marginBottom: "15px",
      fontSize: "20px",
      color: theme.palette.secondary.main,
    },
    "& > p": {
      margin: "10px 0",
    },
    "@media (max-width:830px)": {
      width: "45%",
    },
    "@media (max-width:500px)": {
      width: "100%",
    },
  },
}));
