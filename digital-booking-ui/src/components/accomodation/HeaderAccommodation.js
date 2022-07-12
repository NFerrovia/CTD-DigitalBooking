import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { useNavigate } from "react-router-dom";
import { CATEGORIES } from "../../models/business/categories";

const HeaderAccommodation = ({ accommodation, isAdmin = false }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className={classes.header}>
      <IconButton onClick={handleGoBack}>
        <NavigateBeforeIcon fontSize="large" className="back-arrow" />
      </IconButton>
      <div className={classes.title}>
        {!isAdmin ? (
          <>
            <p>{CATEGORIES[accommodation.category.title]}</p>
            <h3>{accommodation.name}</h3>
          </>
        ) : (
          <h3>Administration</h3>
        )}
      </div>
    </section>
  );
};

export default HeaderAccommodation;

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.white,
    padding: "10px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& .back-arrow": {
      color: theme.palette.white,
    },
    "@media (max-width:500px)": {
      padding: "10px",
    },
  },
  title: {
    textAlign: "right",
    "& > p": {
      textTransform: "uppercase",
    },
    "& > h3": {
      fontWeight: "bold",
      fontSize: "24px",
      "@media (max-width:500px)": {
        fontSize: "18px",
      },
    },
  },
}));
