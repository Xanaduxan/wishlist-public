import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncAntiWish } from './antiWishSlice';
import './AntiWishList.css';

function AddAntiWish():JSX.Element {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();
const { id } = useSelector((state:RootState) => state.user);

  const submitAddAntiWish = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    dispatch(addAsyncAntiWish({ title, id, image, description }));
    setTitle('');
    setImage('');
    setDescription('');
  };
  return (
<>
     <Typography variant="h4" gutterBottom>
        Я не хочу получить в подарок:
     </Typography>

      <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
        noValidate
        autoComplete="off"
        onSubmit={submitAddAntiWish}
      >
          <TextField
            required
            id="outlined-required"
            label="Название"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            value={title}
          />
            <TextField
              id="outlined"
              label="Ссылка на картинку"
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setImage(e.target.value)}

              value={image}
            />
            <TextField
              id="outlined"
              label="Описание"
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
              value={description}
            />

      <button type="submit" className="btn">
        Добавить

      </button>
      </Box>
</>

    );
}

export default AddAntiWish;
