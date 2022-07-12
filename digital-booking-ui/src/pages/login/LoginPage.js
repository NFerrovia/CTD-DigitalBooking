import React, { useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Link, useNavigate } from "react-router-dom";
import { Email, Password } from "../../common/inputs/formInputs";
import FormWrapper from "../../components/auth/FormWrapper";
import { useAuthStore } from "../../stores/auth";
import { useLoginStore } from "../../stores/login";

const LoginPage = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const email = useLoginStore((state) => state.email);
  const setEmail = useLoginStore((state) => state.setEmail);
  const password = useLoginStore((state) => state.password);
  const setPassword = useLoginStore((state) => state.setPassword);
  const error = useLoginStore((state) => state.error);
  const setError = useLoginStore((state) => state.setError);
  const resetState = useLoginStore((state) => state.resetState);
  const needAuth = useLoginStore((state) => state.needAuth);
  const login = useLoginStore((s) => s.fetchLogin);

  const setAuthName = useAuthStore((s) => s.setName);
  const setAuthSurname = useAuthStore((s) => s.setSurname);
  const setAuthEmail = useAuthStore((s) => s.setEmail);
  const setAuthId = useAuthStore((s) => s.setId);
  const setAuthRole = useAuthStore((s) => s.setRole);

  useEffect(() => {
    return () => resetState();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = await login();

    if (!credentials) {
      return;
    }

    if (needAuth) {
      navigate(-1);
    }

    navigate("/");
    setAuthRole(credentials.role_id);
    setAuthId(credentials.user_id);
    setAuthEmail(credentials.email);
    setAuthName(credentials.name);
    setAuthSurname(credentials.lastName);
    resetState();
  };

  return (
    <FormWrapper>
      <form className={classes.form} onSubmit={handleSubmit}>
        {needAuth && (
          <Alert severity="error" className={classes.alertLogin}>
            You need to be Logged In to make a reservation. In case you don't
            have an account create one
            <Link to="/signup"> HERE</Link>
          </Alert>
        )}
        <h2 className="text">Log In</h2>
        <Email
          value={email}
          onChange={setEmail}
          className={classes.textField}
        />
        <Password value={password} onChange={setPassword} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Log In
        </Button>
        <p className={classes.toSignup}>
          Don't have an account yet?<Link to="/signup">Sign Up</Link>
        </p>
        <div className={classes.errorWrapper}>
          {error && <Alert severity="error">{error}</Alert>}
        </div>
      </form>
    </FormWrapper>
  );
};

export default LoginPage;

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    margin: "0 auto",
    "@media (max-width:800px)": {
      width: "90%",
    },
    "& > h2": {
      color: theme.palette.primary.main,
      fontWeight: "bold",
      marginBottom: "12px",
    },
  },
  button: {
    color: theme.palette.white,
    fontWeight: "bold",
  },
  toSignup: {
    marginTop: "18px",
    "& > a": {
      margin: "0 10px",
      color: theme.palette.primary.main,
    },
  },
  errorWrapper: {
    height: "20px",
    marginTop: "16px",
  },
  textField: {
    width: "100%",
    margin: "18px 0",
  },
  alertLogin: {
    marginBottom: "40px",
  },
}));
