import React from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
    <TextField
      {...field}
      {...props}
      label={label}
      variant="outlined"
      fullWidth
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error ? meta.error : ""}
    />
  </div>
  );
};

export default CustomInput;
