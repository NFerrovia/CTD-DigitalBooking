import React, { useCallback, useEffect, useState } from "react";
import { Button, IconButton, makeStyles, TextField } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { Autocomplete } from "@material-ui/lab";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "./Calendar";
import { useCitiesStore } from "../../stores/cities";
import { useProductsStore } from "../../stores/products";
import { useSearchStore } from "../../stores/search";
import { useCategoriesStore } from "../../stores/categories";
import { isNullishArray } from "../../utils/validations";

//DatePicker Configuration in Spanish
registerLocale("es", es);

const SearchSection = () => {
  const classes = useStyles();

  const setLocation = useSearchStore((s) => s.setLocation);
  const location = useSearchStore((s) => s.location);
  const dates = useSearchStore((s) => s.dates);
  const clearSearch = useSearchStore((s) => s.resetState);
  const cities = useCitiesStore((s) => s.data);
  const filterByLocation = useProductsStore((s) => s.filterByLocation);
  const clearFilter = useProductsStore((s) => s.clearFilter);
  const cleanFiltered = useCategoriesStore((s) => s.clearFilter);
  const fetchByCity = useProductsStore((s) => s.fetchDataByLocation);
  const fetchByDates = useProductsStore((s) => s.fetchDataByDates);
  const fetchByDatesAndCity = useProductsStore(
    (s) => s.fetchDataByDatesAndCity
  );

  const handleClearSearch = () => {
    clearFilter();
    clearSearch();
    cleanFiltered();
  };
  useEffect(() => {
    return () => handleClearSearch();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!location && isNullishArray(dates)) return;
    if (!location && !isNullishArray(dates)) {
      fetchByDates(dates);
      return;
    }
    if (location && isNullishArray(dates)) {
      fetchByCity(location);
      return;
    }
    if (location && !isNullishArray(dates)) {
      fetchByDatesAndCity(location, dates);
      return;
    }

    // filterByLocation(location);
  };

  const optionComponent = useCallback((option) => {
    return (
      <div className={classes.optionCity}>
        <LocationOnIcon />
        <div>
          <p className="city">{option.name}</p>
          <p>{option.name_country}</p>
        </div>
      </div>
    );
  }, []);

  return (
    <section className={classes.section}>
      <h2>Look for offers on hotels, houses and much more</h2>
      <form className={classes.wrapper} onSubmit={handleSearch}>
        <div className={classes.div}>
          <Autocomplete
            id="combo-box-demo"
            options={cities || []}
            getOptionLabel={(option) =>
              option && `${option.name}, ${option.name_country}`
            }
            renderOption={optionComponent}
            classes={{
              inputRoot: classes.autocomplete,
            }}
            value={location}
            onChange={(e, newValue) => setLocation(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Where we go?"
                variant="filled"
                className={classes.inputCity}
              />
            )}
          />
        </div>
        <Calendar />
        <Button
          className={classes.submit}
          type="submit"
          variant="contained"
          color="primary"
        >
          Search
        </Button>
        <IconButton
          className={classes.clearSearch}
          disabled={!location && isNullishArray(dates)}
          onClick={() => handleClearSearch()}
        >
          <ClearIcon />
        </IconButton>
      </form>
    </section>
  );
};

export default SearchSection;

const useStyles = makeStyles((theme) => ({
  section: {
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    minHeight: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& > h2": {
      fontSize: "36px",
      color: theme.palette.white,
      textAlign: "center",
      padding: "15px",
    },
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    padding: "15px",
    width: "100%",
    "@media (max-width:500px)": {
      flexDirection: "column",
    },
  },
  div: {
    width: "30%",
    "@media (max-width:500px)": {
      width: "100%",
    },
  },
  autocomplete: {
    backgroundColor: theme.palette.white,
  },
  inputCity: {
    backgroundColor: theme.palette.white,
    borderRadius: "5px",
  },
  optionCity: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "10px 0",
    "& > svg": {
      color: theme.palette.primary.main,
    },
    "& .city": {
      fontWeight: "bold",
    },
  },

  submit: {
    color: theme.palette.white,
    fontWeight: "bold",
    fontSize: "16px",
    height: "52px",
    width: "20%",
    "@media (max-width:500px)": {
      width: "100%",
    },
  },
  clearSearch: {
    color: theme.palette.white,
  },
}));
