import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Container } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <div className='w-500px h-500px bg-blue-500'>
        </div> 
        <Container maxWidth="sm">
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
           
          >
            {({ isSubmitting, handleChange, handleBlur, values }) => (
              <Form>
                <Field
                  as={TextField}
                  label="Name"
                  name="name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
               
                  helperText={<ErrorMessage name="name" />}
                  error={Boolean(<ErrorMessage name="name" />)}
                />

                <Field
                  as={TextField}
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                 
                  value={values.email}
                  helperText={<ErrorMessage name="email" />}
                  error={Boolean(<ErrorMessage name="email" />)}
                />

                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
               
                  value={values.password}
                  helperText={<ErrorMessage name="password" />}
                  error={Boolean(<ErrorMessage name="password" />)}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                  style={{ marginTop: "20px" }}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
</Container>
      </div>
   
    </>
  )
}

export default App
