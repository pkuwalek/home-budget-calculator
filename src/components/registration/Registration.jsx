import React from 'react';
import './registration.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
});

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log(values.email);
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
    resetForm({ values: '' });
    }
  });
  return (
    <div>
      <h1>Register to our page</h1>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="firstname"
            label="First Name"
            name="firstName"
            placeholder="Your name here"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            label="Email Address"
            name="email"
            placeholder="email@email.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </form>
    </div>
  )
};

export default Registration;
