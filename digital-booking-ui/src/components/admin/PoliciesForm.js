import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
import SectionWrapper from "../reservation/SectionWrapper";
import { useAdminStore } from "../../stores/admin";

const PoliciesForm = () => {
  const classes = useStyles();
  const policy1 = useAdminStore((s) => s.policy1);
  const policy2 = useAdminStore((s) => s.policy2);
  const policy3 = useAdminStore((s) => s.policy3);
  const setPolicy1 = useAdminStore((s) => s.setPolicy1);
  const setPolicy2 = useAdminStore((s) => s.setPolicy2);
  const setPolicy3 = useAdminStore((s) => s.setPolicy3);

  const POLICIES = [
    {
      name: "Rules and Policy",
      value: policy1,
      onChange: setPolicy1,
    },
    {
      name: "Health and Security Policy",
      value: policy2,
      onChange: setPolicy2,
    },
    {
      name: "Cancellation policy",
      value: policy3,
      onChange: setPolicy3,
    },
  ];

  return (
    <SectionWrapper>
      <h3>Policies</h3>
      <div className={classes.container}>
        {POLICIES.map((policy, i) => (
          <PolicyDescription
            key={i}
            title={policy.name}
            value={policy.value}
            onChange={policy.onChange}
            className={classes.section}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PoliciesForm;

const PolicyDescription = ({ title, className, value, onChange }) => {
  return (
    <div className={className}>
      <h4>{title}</h4>
      <TextField
        className="text-field"
        label="Description"
        multiline
        minRows={8}
        maxRows={8}
        variant="outlined"
        fullWidth
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={20000}
      />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
  },
  section: {
    flexGrow: 1,
    "& > h4": {
      padding: "20px 0",
    },
    "& .text-field": {
      minWidth: "300px",
    },
  },
}));
