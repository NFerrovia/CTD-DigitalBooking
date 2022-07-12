import React from "react";
import { IconButton, makeStyles, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SectionWrapper from "../reservation/SectionWrapper";
import { useAdminStore } from "../../stores/admin";

const ImagesForm = () => {
  const classes = useStyles();

  const currentImage = useAdminStore((s) => s.currentImage);
  const setCurrentImage = useAdminStore((s) => s.setCurrentImage);
  const images = useAdminStore((s) => s.images);
  const addImages = useAdminStore((s) => s.addImages);
  const deleteImage = useAdminStore((s) => s.deleteImage);

  const handleDeleteImg = (url) => {
    deleteImage(url);
  };

  return (
    <SectionWrapper>
      <h3>Upload Images</h3>
      <div className={classes.container}>
        <TextField
          label="Image Url"
          id="image"
          type="text"
          fullWidth
          value={currentImage}
          onChange={(e) => setCurrentImage(e.target.value)}
        />
        <IconButton
          className={classes.button}
          //   color="primary"
          aria-label="add image"
          onClick={addImages}
        >
          <AddIcon className="icon" />
        </IconButton>
      </div>
      <div className={classes.wrapper}>
        {images.length > 0 &&
          images.map((image, i) => (
            <div
              className="image"
              key={i}
              onClick={() => handleDeleteImg(image)}
            >
              <img src={image} alt="Room" />
            </div>
          ))}
      </div>
    </SectionWrapper>
  );
};

export default ImagesForm;

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
  wrapper: {
    margin: "20px 0",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "10px",
    "& .image": {
      cursor: "pointer",
      width: "24%",
      "@media (max-width:1000px)": {
        width: "49%",
      },
      "@media (max-width:630px)": {
        width: "100%",
      },
    },
    "& .image img": {
      width: "100%",
    },
  },
}));
