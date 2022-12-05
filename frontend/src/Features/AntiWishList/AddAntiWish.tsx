import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncAntiWish } from './antiWishSlice';

function AddAntiWish():JSX.Element {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
const { id } = useSelector((state:RootState) => state.user);


  const submitAddAntiWish = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    dispatch(addAsyncAntiWish({ title, id }));
    setTitle('');
  };
  return (
<>
     <Typography variant="h4" gutterBottom>
        Я не хочу получить в подарок:
     </Typography>

      <form className="profile-edit" onSubmit={submitAddAntiWish}>

          <TextField
            required
            id="outlined-required"
            label="Required"
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            value={title}
          />

      <button type="submit" className="btn">
        Добавить

      </button>
      </form>
</>

    );
}

export default AddAntiWish;
