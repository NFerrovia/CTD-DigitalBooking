import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import Swal from "sweetalert2";
import HeaderAccommodation from "../../components/accomodation/HeaderAccommodation";
import BasicData from "../../components/admin/BasicData";
import ImagesForm from "../../components/admin/ImagesForm";
import PoliciesForm from "../../components/admin/PoliciesForm";
import ServiceForm from "../../components/admin/ServiceForm";
import { useAdminStore } from "../../stores/admin";

const AdminPage = () => {
  const classes = useStyles();

  const doPostProduct = useAdminStore((s) => s.doPostProduct);
  const resetState = useAdminStore((s) => s.resetState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await doPostProduct();
    if (response.id) {
      Swal.fire({
        title: "The product has been created successfully",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "ok",
      }).then(() => {
        resetState();
      });
    }
  };

  return (
    <>
      <HeaderAccommodation isAdmin />
      <section className={classes.section} onSubmit={handleSubmit}>
        <h2>Create Accommodation</h2>
        <form className={classes.form}>
          <BasicData />
          <ServiceForm />
          <PoliciesForm />
          <ImagesForm />
          <div className={classes.wrapperButton}>
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              color="primary"
            >
              Create product
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AdminPage;

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "30px 40px",
    "@media (max-width:480px)": {
      padding: "30px 15px",
    },
  },
  form: {
    padding: "30px 25px",
    "@media (max-width:480px)": {
      padding: "30px 0",
    },
  },
  wrapperButton: {
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    color: theme.palette.white,
    fontWeight: "bold",
    fontSize: "20px",
  },
}));
