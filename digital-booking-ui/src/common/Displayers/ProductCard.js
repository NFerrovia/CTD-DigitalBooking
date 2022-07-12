import React from "react";
import { Button, makeStyles, Tooltip } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import LocationDisplayer from "./LocationDisplayer";
import { CATEGORIES } from "../../models/business/categories";
import { ServicesSection } from "../../components/home/ServicesSection";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  name,
  description,
  imageUrl,
  category,
  city,
  features,
  image,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleGoAccommodation = (id) => {
    navigate(`/accommodation/${id}`);
  };
  return (
    <div className={classes.productCard} key={id}>
      <img src={image || imageUrl} alt={name} className="card-img" />
      <div className="card-text">
        <div className="upper-card">
          <div className="category-wrapper">
            <p className="category">{CATEGORIES[category.title]}</p>
            <Rating name="rating" size="small" />
            <div className="punctuation">
              <div className="number">
                <p>8</p>
              </div>
              {/* <p>Very Good</p> */}
            </div>
          </div>
          <Tooltip title={name} arrow>
            <h3 className="title">{name}</h3>
          </Tooltip>
          <LocationDisplayer city={city} />
          <ServicesSection services={features} />
        </div>
        <div className="bottom-card">
          <p className="description">{description}</p>
          <Button
            className="button-details"
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => handleGoAccommodation(id)}
          >
            DETAILS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

const useStyles = makeStyles((theme) => ({
  productCard: {
    display: "flex",
    width: "49%",
    borderRadius: "10px",
    ...theme.mixins.cardShadow,
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
    },
    "@media (max-width:1200px)": {
      width: "100%",
    },
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
    "& .card-img": {
      objectFit: "cover",
      width: "300px",
      height: "300px",
      borderRadius: "10px",
      "@media (max-width:600px)": {
        width: "100%",
      },
    },
    "& .card-text": {
      padding: "15px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    "& .category-wrapper": {
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    "& .category": {
      color: theme.palette.text.hint,
      marginRight: "10px",
    },
    "& .star": {
      color: theme.palette.primary.main,
    },
    "& .punctuation": {
      position: "absolute",
      right: 0,
      top: 0,
      textAlign: "right",
      "& :nth-child(2)": {
        marginTop: "5px",
        fontWeight: "bold",
      },
      "& .number": {
        display: "flex",
        justifyContent: "end",
        "& > p": {
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
          fontSize: "20px",
          fontWeight: "bold",
          padding: "2px 6px",
        },
      },
    },
    "& .title": {
      fontSize: "24px",
      width: "75%",
      ...theme.mixins.textClamp(2),
    },
    "& .description": {
      ...theme.mixins.textClamp(3),
      marginBottom: "15px",
      paddingRight: "5px",
    },
    "& .button-details": {
      color: theme.palette.white,
      width: "100%",
      fontWeight: "bold",
    },
  },
}));
