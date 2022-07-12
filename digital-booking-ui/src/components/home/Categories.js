import React, { useEffect, useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useCategoriesStore } from "../../stores/categories";
import { useProductsStore } from "../../stores/products";
import BackspaceIcon from "@material-ui/icons/Backspace";
import { isEmptyArray } from "../../utils/validations";

const Categories = () => {
  const classes = useStyles();
  const categories = useCategoriesStore((s) => s.data);
  const loading = useCategoriesStore((s) => s.loading);
  const loaded = useCategoriesStore((s) => s.loaded);
  const fetchCategories = useCategoriesStore((s) => s.fetchData);
  const filteredCategories = useCategoriesStore((s) => s.filtered);
  const clearFilterCategories = useCategoriesStore((s) => s.clearFilter);
  const setFilteredCategories = useCategoriesStore(
    (s) => s.setFilteredByCategory
  );

  const fetchByCategory = useProductsStore((s) => s.fetchDataByCategory);
  const clearFilter = useProductsStore((s) => s.clearFilter);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleClearFilter = () => {
    clearFilter();
    clearFilterCategories();
  };

  const handleFilterByCategory = (category) => {
    if (category != filteredCategories) {
      fetchByCategory(category.id);
      setFilteredCategories(category);
    }
  };

  return (
    <section className={classes.section}>
      <div className={classes.titleWrapper}>
        <h2>Search by Category</h2>
        {filteredCategories && (
          <Button
            color="secondary"
            variant="contained"
            endIcon={<BackspaceIcon fontSize="small" />}
            onClick={handleClearFilter}
          >
            Clear Filter
          </Button>
        )}
      </div>
      <div className={classes.cardWrapper}>
        {loaded && isEmptyArray(categories) && <h3>No data found</h3>}
        {loading && !categories.length > 0 ? (
          <SkeletonCategoryCards />
        ) : (
          categories.map((category) => (
            <CategoryCard
              key={category.id}
              className={classes.card}
              categorySelected={filteredCategories}
              onClick={() => handleFilterByCategory(category)}
              {...category}
            />
          ))
        )}
      </div>
    </section>
  );
};

const CategoryCard = ({
  id,
  title,
  description,
  urlImage,
  onClick,
  categorySelected,
  className,
}) => {
  const classes = useStyles();
  const isSelected = categorySelected?.title === title;

  return (
    <div
      className={`${className} ${isSelected && classes.selected}`}
      onClick={() => onClick(title)}
    >
      <img src={urlImage} alt={title} className="card-img" />
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
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

export default Categories;

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "30px 40px",
    "@media (max-width:480px)": {
      padding: "30px 15px",
    },
  },
  selected: {
    borderBottom: `5px solid ${theme.palette.primary.main}`,
    transform: "scale(1.02)",
  },
  titleWrapper: {
    height: "35px",
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    gap: "20px",
    "@media (max-width:480px)": {
      "& button": {
        fontSize: "12px",
        "& svg": {
          display: "none",
        },
      },
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
  card: {
    width: "24%",
    borderRadius: "10px",
    ...theme.mixins.cardShadow,
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
    },
    "& .card-img": {
      objectFit: "cover",
      width: "100%",
      borderRadius: "10px 10px 0px 0px",
    },
    "& .card-text": {
      padding: "10px",
      "& > h3": {
        marginBottom: "5px",
      },
    },
    "@media (max-width:1200px)": {
      width: "45%",
    },
    "@media (max-width:490px)": {
      width: "100%",
    },
  },
  skeletonCard: {
    borderRadius: "10px",
    width: "22vw",
    height: "350px",
    "@media (max-width:1200px)": {
      width: "45%",
      height: "350px",
    },
    "@media (max-width:490px)": {
      width: "100%",
      height: "300px",
    },
  },
}));
