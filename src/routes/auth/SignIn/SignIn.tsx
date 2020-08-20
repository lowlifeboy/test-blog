import React from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Grid, TextField, Typography} from '@material-ui/core';
import {useStyles} from 'routes/auth/SignIn/SignIn.style';
import {Form, Formik, FormikProps} from 'formik';
import {useAuthActions} from 'state/hooks/UseActions';
import * as Yup from 'yup';
import {useSelector} from 'react-redux';
import State from 'state/entities/State';

interface LoginFormValues {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const actions = useAuthActions();

  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object<LoginFormValues>({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  }).defined();

  const {auth} = useSelector((state: State) => state);

  const classes = useStyles();

  const renderForm = ({
    values,
    errors,
    setFieldValue,
    isValid,
  }: FormikProps<LoginFormValues>) => {
    return (
      <Form className={classes.form}>
        <TextField
          label="Email"
          fullWidth
          type="email"
          autoComplete="new-email"
          value={values.email}
          onChange={(e) => setFieldValue('email', e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          className={classes.textField}
          variant="filled"
        />
        <TextField
          label="Password"
          fullWidth
          type="password"
          autoComplete="new-password"
          value={values.password}
          onChange={(e) => setFieldValue('password', e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          className={classes.textField}
          variant="filled"
        />
        <Button
          color="primary"
          className={classes.signInButton}
          variant="contained"
          type="submit"
          size="large"
          fullWidth
          disabled={!isValid}
        >
          Sign In
        </Button>
      </Form>
    );
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.content} item>
          <div className={classes.contentBody}>
            <div className={classes.card}>
              <Typography className={classes.title} variant="h2">
                Sign In
              </Typography>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, formActions) => {
                  actions.login(values);
                  formActions.setSubmitting(false);
                }}
              >
                {renderForm}
              </Formik>
              {auth.error && <p className={classes.errorMessage}>{auth.error}</p>}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(SignIn);
