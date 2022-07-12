import { useState } from "react";
import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

export const Name = ({
  value,
  onChange,
  error = false,
  className = "",
  disabled,
}) => {
  return (
    <TextField
      id="name"
      label="Name"
      value={value}
      onChange={({ target }) => onChange(target.value)}
      required
      className={className}
      error={error}
      disabled={disabled}
    />
  );
};

export const Surname = ({
  value,
  onChange,
  error = false,
  className = "",
  disabled,
}) => (
  <TextField
    id="surname"
    label="Surname"
    value={value}
    onChange={({ target }) => onChange(target.value)}
    required
    className={className}
    error={error}
    disabled={disabled}
  />
);

export const Email = ({
  value,
  onChange,
  error = false,
  className = "",
  disabled,
}) => {
  return (
    <TextField
      className={className}
      id="email"
      label="Email"
      value={value}
      onChange={({ target }) => onChange(target.value)}
      required
      error={error}
      disabled={disabled}
    />
  );
};

export const Password = ({ value, onChange, error = false }) => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  return (
    <TextField
      className={classes.textField}
      id="password"
      label="Password"
      type={visible ? "text" : "password"}
      value={value}
      onChange={({ target }) => onChange(target.value)}
      required
      error={error}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="start"
            onClick={() => setVisible((state) => !state)}
          >
            {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </InputAdornment>
        ),
      }}
    />
  );
};

export const ConfirmPassword = ({ value, onChange, error = false }) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.textField}
      id="password2"
      label="Confirm Password"
      type="password"
      value={value}
      onChange={({ target }) => onChange(target.value)}
      required
      error={error}
    />
  );
};

export const City = ({ value, onChange, error = false, className = "" }) => {
  return (
    <TextField
      id="city"
      label="City"
      value={value}
      onChange={({ target }) => onChange(target.value)}
      className={className}
      required
      error={error}
    />
  );
};

export const Time = ({ value, onChange, className }) => {
  return (
    <TextField
      label="Choose your arrival time"
      id="time"
      type="time"
      value={value}
      onChange={({ target }) => onChange(target.value)}
      InputLabelProps={{
        shrink: true,
      }}
      className={className}
      required
    />
  );
};

const useStyles = makeStyles(() => ({
  textField: {
    width: "100%",
    margin: "18px 0",
  },
}));
