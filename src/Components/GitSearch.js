import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from './inputSearch'; // Import the CustomInput component
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const GitSearch = () => {
  const initialValues = { 
    name: '', 
    email: '', 
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required")
  });

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh",  backgroundColor: '#f5f5f5' }}
    >
      <Typography variant="h4"  sx={{ mb: 2, fontWeight: 'bold' }}>
        Sign Up
      </Typography>
      <Divider sx={{ mb: 3, width: '100%', maxWidth: 400 }} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Box
              display={'flex'}
              flexDirection="column"
              gap={2}
              sx={{ width: '120%' }}
            >
              <CustomInput
                label="Name"
                name="name"
                type="text"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <CustomInput
                label="Email"
                name="email"
                type="email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <CustomInput
                label="Password"
                name="password"
                type="password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <CustomInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                helperText={touched.confirmPassword && errors.confirmPassword}
              />

              <Box mt={1}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                  fullWidth
                  sx={{ py: 1 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default GitSearch;

