import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

function Profile():JSX.Element {
  return (
    <Box
      component="form"
      sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
      noValidate
      autoComplete="off"
      className="profile-form"
    >

    <Typography variant="h4" gutterBottom>
      Профиль
    </Typography>

    <Typography variant="body1" gutterBottom>
      Изменить профиль
    </Typography>

    <form className="profile-edit">
     
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Подтянуть из базы"
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
    

    <button type="submit" className='btn'>
      button text

    </button>
    </form>
    </Box>

  );
}

export default Profile;
