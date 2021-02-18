import React from 'react';
import './registration.scss';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Registration = () => (
  <>
    <h1>Register to our page</h1>
    <Formik
      initialValues={{
        firstName: '',
        email: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(values.email);
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
        resetForm({ values: '' });
      }}
    >
      <Form>
        <TextInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Your name here"
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="email@email.com"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </>
);

export default Registration;
