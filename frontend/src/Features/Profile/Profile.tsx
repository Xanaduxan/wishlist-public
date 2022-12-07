import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import { useForm, Controller, SubmitHandler, useFormState } from 'react-hook-form';
import { Button, MenuItem, Select, IconButton } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { simpleValidations } from './validations';
import { userProfileAsyncUpdate } from './userProfileSlice';
import { useAppDispatch } from '../../store';
import * as api from '../../Api/api';

interface ChangeForm {
  surname: string
  name: string
  gender: string
  image?: string
}

function Profile():JSX.Element {
  const { handleSubmit, control, setError } = useForm<ChangeForm>({ mode: 'onChange' });
  const { errors } = useFormState({ control });
  console.log(errors);
  const dispatch = useAppDispatch();

  const onSubmit:SubmitHandler<ChangeForm> = (data):void => {
  console.log(data);
  //  dispatch(userProfileAsyncUpdate(data));
  };

  return (
    // <Box
    //   component="form"
    //   sx={{
    //   '& .MuiTextField-root': { m: 1, width: '25ch' },
    // }}
    //   noValidate
    //   autoComplete="off"
    //   className="profile-form"
    // >
<>
    <Typography variant="h4" gutterBottom>
      Профиль
    </Typography>

    <Typography variant="body1" gutterBottom>
      Изменить профиль
    </Typography>

    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 3 }}>
    <Controller
      control={control}
      name="surname"
      rules={simpleValidations}
      render={({ field }) => (
                    <TextField
                      name="surname"
                      fullWidth
                      label="Surname"
                      onChange={(event) => field.onChange(event)}
                      value={field.value || ''}
                      error={!!errors.surname?.message}
                      helperText={errors.surname?.message}
                    />
)}
    />
    <Controller
      control={control}
      name="name"
      rules={simpleValidations}
      render={({ field }) => (
                    <TextField
                      name="name"
                      fullWidth
                      label="Name"
                      onChange={(event) => field.onChange(event)}
                      value={field.value || ''}
                      error={!!errors.name?.message}
                      helperText={errors.name?.message}
                    />
)}
    />
    <Controller
      control={control}
      name="gender"
      rules={simpleValidations}
      render={({ field }) => (
        <Select
          name="gender"
          label="Gender"
          value={field.value || ''}
          onChange={(event) => field.onChange(event)}
          error={!!errors.gender?.message}
        >
         <MenuItem value="male">Male</MenuItem>
         <MenuItem value="female">Female</MenuItem>
        </Select>
)}
    />

{/* <Controller
  control={control}
  name="gender"
  rules={simpleValidations}
  render={({ field }) => (
        <IconButton color="primary" aria-label="upload picture" component="label">
  <input type="file" hidden name="file" onChange={(e) => api.sendAvatar(e.target.files)} />
  <PhotoCamera />
        </IconButton>
)}
/> */}
<input type="file" name="pic" onChange={(e) => api.sendAvatar(e.target.files)} />

    <Button
      type="submit"
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Submit
    </Button>
    </Box>

    {/* // </Box> */}
</>
  );
}

export default Profile;
