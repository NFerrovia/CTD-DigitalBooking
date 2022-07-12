import { makeStyles, MenuItem, TextField } from "@material-ui/core";
import React from "react";
import { CATEGORIES } from "../../models/business/categories";
import { useAdminStore } from "../../stores/admin";
import { useCategoriesStore } from "../../stores/categories";
import { useCitiesStore } from "../../stores/cities";

const BasicData = () => {
  const classes = useStyles();
  const cities = useCitiesStore((s) => s.data);

  const categories = useCategoriesStore((s) => s.data);

  const productName = useAdminStore((s) => s.name);
  const setProductName = useAdminStore((s) => s.setName);
  const category = useAdminStore((s) => s.category);
  const setCategory = useAdminStore((s) => s.setCategory);
  const address = useAdminStore((s) => s.address);
  const setAddress = useAdminStore((s) => s.setAddress);
  const city = useAdminStore((s) => s.city);
  const setCity = useAdminStore((s) => s.setCity);
  const latitude = useAdminStore((s) => s.latitude);
  const setLatitude = useAdminStore((s) => s.setLatitude);
  const longitude = useAdminStore((s) => s.longitude);
  const setLongitude = useAdminStore((s) => s.setLongitude);
  const description = useAdminStore((s) => s.description);
  const setDescription = useAdminStore((s) => s.setDescription);

  return (
    <div className={classes.containerCreate}>
      <div className="input-wrapper">
        <TextField
          label="Name"
          id="name"
          required
          fullWidth
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          label="Category"
          id="category"
          fullWidth
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          select
        >
          {categories.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.title}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="input-wrapper">
        <TextField
          label="Address"
          id="address"
          type="text"
          required
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          label="City"
          id="City"
          required
          select
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          {cities.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {`${option.name}, ${option.name_country}`}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="input-wrapper">
        <TextField
          label="Latitude"
          id="latitude"
          type="number"
          fullWidth
          required
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <TextField
          label="Longitude"
          id="longitude"
          type="number"
          fullWidth
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          required
        />
      </div>
      <TextField
        label="Description"
        multiline
        minRows={8}
        maxRows={8}
        variant="outlined"
        fullWidth
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={20000}
      />
    </div>
  );
};

export default BasicData;

const useStyles = makeStyles((theme) => ({
  containerCreate: {
    display: "flex",
    flexDirection: "column",
    "& > .input-wrapper": {
      // width: "100%",
      //   border: "2px solid black",
      margin: "20px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      "@media (max-width:500px)": {
        flexDirection: "column",
      },
    },
  },
}));
