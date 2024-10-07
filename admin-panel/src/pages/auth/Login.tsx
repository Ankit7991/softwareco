
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Typography, Container, Paper } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../store/slices/authSlice';
import { Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="xs" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h5" component="h1" align="center">
          Login
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(login('abc'));
            navigate('/')
          }}
        >
          {({ handleChange, handleBlur, values, errors, touched }) => (
            <Form>
              <Field
                name="email"
                as={TextField}
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                required
                helperText={<ErrorMessage name="email" />}
                error={Boolean(errors.email && touched.email)}
              />
              <Field
                name="password"
                as={TextField}
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
                helperText={<ErrorMessage name="password" />}
                error={Boolean(errors.password && touched.password)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '16px' }}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}
