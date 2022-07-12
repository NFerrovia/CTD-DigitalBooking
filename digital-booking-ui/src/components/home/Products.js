import React, { useEffect } from "react";
import { Button, makeStyles, Tooltip } from "@material-ui/core";
import { Rating, Skeleton } from "@material-ui/lab";
import LocationDisplayer from "../../common/Displayers/LocationDisplayer";
import { useNavigate } from "react-router-dom";

import { useProductsStore } from "../../stores/products";
import { ServicesSection } from "./ServicesSection";
import { CATEGORIES } from "../../models/business/categories";
import ProductCard from "../../common/Displayers/ProductCard";

const Products = () => {
  const classes = useStyles();
  const products = useProductsStore((s) => s.data);
  const loading = useProductsStore((s) => s.loading);
  const loaded = useProductsStore((s) => s.loaded);
  const fetchProducts = useProductsStore((s) => s.fetchData);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section className={classes.section}>
      <h2>Recommendations</h2>
      <div className={classes.cardWrapper}>
        {loaded && products.length === 0 && <h3>No data found</h3>}
        {products && loaded ? (
          products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))
        ) : (
          <SkeletonCategoryCards />
        )}
      </div>
    </section>
  );
};

const SkeletonCategoryCards = () => {
  const classes = useStyles();
  return (
    <>
      <Skeleton classes={{ root: classes.skeletonCard }} variant="rect" />
      <Skeleton classes={{ root: classes.skeletonCard }} variant="rect" />
      <Skeleton classes={{ root: classes.skeletonCard }} variant="rect" />
      <Skeleton classes={{ root: classes.skeletonCard }} variant="rect" />
    </>
  );
};

export default Products;

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "30px 40px",
    "& > h2": {
      marginBottom: "15px",
    },
    "@media (max-width:480px)": {
      padding: "30px 15px",
    },
  },
  cardWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    flexWrap: "wrap",
    "@media (max-width:490px)": {
      flexDirection: "column",
    },
  },

  skeletonCard: {
    borderRadius: "10px",
    width: "47vw",
    height: "300px",
    "@media (max-width:1200px)": {
      width: "100%",
    },
    "@media (max-width:600px)": {
      height: "500px",
    },
  },
}));
