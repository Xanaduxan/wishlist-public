import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as api from '../../Api/api';
import { emailValidation, nickNameValidation, passwordValidation } from './validation';
import Response from './types/Response';

const theme = createTheme();

interface IRegistrationForm {
   login: string
   email: string
   password: string
   repeatPassword: string
}

export default function SignUp():JSX.Element {
  const { handleSubmit, control, setError } = useForm<IRegistrationForm>({ mode: 'onChange' });
  const { errors } = useFormState({ control });

  const navigate = useNavigate();

  const onSubmit:SubmitHandler<IRegistrationForm > = (data):void => {
    if (data.password !== data.repeatPassword) {
      setError('repeatPassword', {
        type: 'onSubmit',
        message: 'пароли не совпадают'
      });
      return;
    }
    api.registration(data).then((res:Response) => {
      if (res.status === 'error login') {
        return setError('login', {
          type: 'server',
          message: res.message
        });
      }
      if (res.status === 'error') {
        return setError('email', {
          type: 'server',
          message: res.message
        });
      }
      navigate('/');
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="login"
                  rules={nickNameValidation}
                  render={({ field }) => (
                    <TextField
                      // autoComplete="given-name"
                      name="login"
                      fullWidth
                      label="Login"
                      // autoFocus
                      // required
                      onChange={(event) => field.onChange(event)}
                      value={field.value || ''}
                      error={!!errors.login?.message}
                      helperText={errors.login?.message}
                    />
)}
                />
              </Grid>
              <Grid item xs={12}>
              <Controller
                control={control}
                name="email"
                rules={emailValidation}
                render={({ field }) => (
                    <TextField
                      // required
                      fullWidth
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(event) => field.onChange(event)}
                      value={field.value || ''}
                      error={!!errors.email?.message}
                      helperText={errors.email?.message}
                    />
)}
              />
              </Grid>
              <Grid item xs={12}>
              <Controller
                control={control}
                name="password"
                rules={passwordValidation}
                render={({ field }) => (
                    <TextField
                      // required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      autoComplete="new-password"
                      onChange={(event) => field.onChange(event)}
                      value={field.value || ''}
                      error={!!errors.password?.message}
                      helperText={errors.password?.message}
                    />
)}
              />
              </Grid>
              <Grid item xs={12}>
              <Controller
                control={control}
                name="repeatPassword"
                render={({ field }) => (
                    <TextField
                      // required
                      fullWidth
                      name="repeatPassword"
                      label="Repeat Password"
                      type="password"
                      autoComplete="new-password"
                      onChange={(event) => field.onChange(event)}
                      value={field.value || ''}
                      error={!!errors.repeatPassword?.message}
                      helperText={errors.repeatPassword?.message}
                    />
)}
              />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/auth/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
