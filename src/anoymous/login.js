import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Label, FormGroup, Input, FormText, Button } from 'reactstrap';

export default class LoginComponent extends React.Component {
  state = {
    credentials: {
      email: '',
      password: ''
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              {/* FORMIK */}
              <Formik
                initialValues={this.state.credentials}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email().required('Required'),
                  password: Yup.string().required('Password is required')
                })}
                onSubmit={values => {
                  console.log(values);
                }}
                render={({
                  touched,
                  errors,
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  dirty,
                }) => (
                    <Form onSubmit={handleSubmit}>
                      <FormGroup>
                        <Label>Email*</Label>
                        <Input
                          id="email"
                          type="text"
                          placeholder="Email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.email && <FormText color="danger">{errors.email}</FormText>}
                      </FormGroup>

                      <FormGroup>
                        <Label>Password*</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.password && <FormText color="danger">{errors.password}</FormText>}
                      </FormGroup>
                      <Button color="primary" type="submit" disabled={!dirty || Object.keys(errors).length > 0}>Submit</Button>
                    </Form>

                  )}
              />
              {/* END OF FORMIK */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}