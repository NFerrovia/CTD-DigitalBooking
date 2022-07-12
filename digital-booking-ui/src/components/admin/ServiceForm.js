import React from "react";
import {
  Chip,
  IconButton,
  makeStyles,
  MenuItem,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {
  SERVICES,
  SERVICES_OPTIONS,
} from "../../models/business/servicesIcons";
import { useAdminStore } from "../../stores/admin";
import SectionWrapper from "../reservation/SectionWrapper";

const ServiceForm = () => {
  const classes = useStyles();
  const service = useAdminStore((s) => s.currentService);
  const setService = useAdminStore((s) => s.setCurrentService);
  const services = useAdminStore((s) => s.services);
  const setServices = useAdminStore((s) => s.setServices);
  const deleteService = useAdminStore((s) => s.deleteService);

  return (
    <SectionWrapper>
      <h3>Add Services</h3>
      <div className={classes.container}>
        <TextField
          label="Service"
          id="service"
          select
          fullWidth
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          {Object.entries(SERVICES_OPTIONS).map(([key, value]) => (
            <MenuItem key={key} value={value}>
              {`${key}`}
            </MenuItem>
          ))}
        </TextField>
        <IconButton
          className={classes.button}
          aria-label="add service"
          onClick={setServices}
        >
          <AddIcon className="icon" />
        </IconButton>
      </div>
      <div className={classes.serviceWrapper}>
        {services.length > 0 &&
          services.map((service) => (
            <Chip
              key={service}
              avatar={SERVICES[service].icon}
              label={SERVICES[service].text}
              onDelete={() => deleteService(service)}
              className="chip"
            />
          ))}
      </div>
    </SectionWrapper>
  );
};

export default ServiceForm;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    marginTop: "5px",
    backgroundColor: theme.palette.primary.main,
    "& .icon": {
      color: theme.palette.white,
    },
    "&:hover .icon": {
      color: theme.palette.primary.main,
    },
  },
  serviceWrapper: {
    marginTop: "20px",
    "& .chip": {
      margin: "5px 15px",
    },
  },
}));
